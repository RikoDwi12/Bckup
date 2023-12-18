export class CreatePromoDto {
    name!: string;
    description!: string;
    image!: string;
    amount!: number;
    percent!: number;
    min_active_amount!: number;
    max_active_amount!: number;
    max_amount!: number;
}