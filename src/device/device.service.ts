import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { FindDeviceQueryDto } from './dto/find-device.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { dotToObject } from 'src/utils/string';

@Injectable()
export class DeviceService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDeviceDto: CreateDeviceDto) {
    return 'This action adds a new device';
  }

  async findAll(query: FindDeviceQueryDto) {
    //TODO: short filter search dan pagination

    const filter: Prisma.DeviceWhereInput[] = [];
    let search: Prisma.DeviceWhereInput[] = [];
    if (query.id) {
      filter.push({
        id: {
          in: query.id,
        },
      });
    }
    if (query.search) {
      search = [
        {
          fingerprint: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
      ];
    }
    const res = await this.prisma.extended.device.paginate({
      limit: query.limit || 10,
      page: query.page,
      where: {
        deleted_at: null,
        AND: [
          ...filter,
          {
            OR: search,
          },
        ],
      },
      orderBy: dotToObject(query.orderBy, query.orderDirection),
    });
    return {
      ...res,
      hasNextPage: res.hasNextPage,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} device`;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
