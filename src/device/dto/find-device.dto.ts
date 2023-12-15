import { Device } from '@prisma/client';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { QueryableDto, SchemaDto } from '../../@types/dto.types';
export const findDeviceQuerySchema = z.object({
  fingerprint: z.string(),
  orderBy: z
    .enum(['fingerprint', 'created_at'])
    .optional()
    .default('created_at'),
  orderDirection: z.enum(['asc', 'desc']).optional().default('desc'),
  //filterable
  id: z.array(z.number({ coerce: true })).optional(),
  //pagination
  limit: z.number({ coerce: true }).optional(),
  page: z.number({ coerce: true }).optional(),
} satisfies SchemaDto<Device, QueryableDto>);
export class FindDeviceQueryDto extends createZodDto(findDeviceQuerySchema) {}
