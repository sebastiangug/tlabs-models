import { SiteSchema } from './site.models';
import { prop, Ref, arrayProp, Typegoose } from 'typegoose';
import { Without } from './shared.models';

export class SurveySchema {
	@prop({ required: true })
	scheduleId: string;

	@prop()
	details?: string;
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

	@prop({ required: true })
	projectId: string;

	@prop({ default: new Date(Date.now()) })
	createdAt: Date;

	@prop({ default: new Date(Date.now()) })
	updatedAt: Date;

	@prop({ required: true })
	createdBy?: string;

	@prop({ required: true })
	updatedBy?: string;

	@prop({ _id: false })
	site?: SiteSchema;

	@prop({ _id: false })
	survey?: SurveySchema;

	@prop({ _id: false })
	resident?: ResidentSchema;
}

export const Order = new OrderSchema().getModelForClass(OrderSchema, {
	schemaOptions: { collection: 'orders' }
});

export type IOrder = Without<OrderSchema, 'getModelForClass' | 'setModelForClass' | 'buildSchema'>;
export type IResidentSchema = ResidentSchema;
export type ISurveySchema = SurveySchema;
