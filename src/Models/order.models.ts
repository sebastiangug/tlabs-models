import { SiteSchema } from './site.models';
import { prop, Typegoose } from 'typegoose';
import { Without, Element } from './shared.models';
import { SurveyType } from '../enums';
import { IdTitleSchema } from './system.models';

export class SurveySchema {
	@prop()
	schedule?: IdTitleSchema;
	@prop()
	project?: IdTitleSchema;
	@prop({ enum: Object.values(SurveyType) })
	type?: SurveyType;
	@prop()
	details?: string;
	@prop()
	elements?: Element[];
}

export class ResidentSchema {
	@prop({ required: true })
	isVoid: boolean;
	@prop()
	name?: string;
	@prop()
	email?: string;
	@prop()
	phone?: string;
	@prop()
	details?: string;
}

export class OrderSchema extends Typegoose {
	@prop({ required: true })
	_id?: string;

	@prop({ default: 'draft' })
	status?: string;

	@prop({ required: true })
	clientId: string;

	@prop()
	projectId?: string;

	@prop({ default: new Date(Date.now()) })
	createdAt: Date;

	@prop({ default: new Date(Date.now()) })
	updatedAt: Date;

	@prop({ required: true })
	createdBy?: string;

	@prop({ required: true })
	updatedBy?: string;

	@prop({ required: true })
	createdByFriendly?: string;

	@prop({ required: true })
	updatedByFriendly?: string;

	@prop()
	site?: SiteSchema;

	@prop()
	survey?: SurveySchema;

	@prop()
	resident?: ResidentSchema;
}

export const Order = new OrderSchema().getModelForClass(OrderSchema, {
	schemaOptions: { collection: 'orders' }
});

export type IOrder = Without<
	OrderSchema,
	'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;

export type IResidentSchema = ResidentSchema;
export type ISurveySchema = SurveySchema;
