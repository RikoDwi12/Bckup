import { Injectable } from '@nestjs/common';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PromoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPromoDto: CreatePromoDto) {
    const createdPromo = await this.prisma.promo.create({
      data: createPromoDto,
    });

    return {
      code: 200,
      message: 'Successfully created',
      data: createdPromo,
    };
  }

  async findAll() {
    const allPromos = await this.prisma.promo.findMany({
      where: {
        deleted_at : null
      }
    });

    return {
      code: 200,
      message: 'Successfully retrieved all promos',
      data: allPromos,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} promo`;
  }

  async patchById(promoId: number, updatePromoDto: UpdatePromoDto) {
    const updatedPromo = await this.prisma.promo.update({
      where: { id: promoId },
      data: updatePromoDto,
    });
  
    return {
      code: 200,
      message: 'Successfully patched promo',
      data: updatedPromo,
    };
  }
  

  async remove(id: number) {
    const data = await this.prisma.promo.update({
      where: { id: id },
      data: {
        deleted_at : new Date(),
      },
    });
  
    return {
      code: 200,
      message: 'Successfully deleted promo',
      data: data,
    };
  }
}
