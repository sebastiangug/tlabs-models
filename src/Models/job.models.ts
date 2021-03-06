import { SiteSchema, ISite } from './site.models';
import { Requirements, Workflow, Samples, GoogleFile, Without } from './shared.models';
import { prop, Ref, arrayProp, Typegoose } from 'typegoose';
import { Reason, Likelihood, Status } from '../enums';

export class JobContact {
	@prop()
	name?: string;

	@prop()
	phone?: string;

	@prop()
	mobile?: string;

	@prop()
	alternative?: string;

	@prop()
	email?: string;
}

export class Failure {
	@prop({
		default: 'No Answer',
		enum: Object.values(Reason)
	})
	reason: Reason;
	@prop()
	notes?: string;
}

export class WorkType {
	@prop({ required: true })
	TLtype: string;
	@prop({ required: true })
	quoteRate: number;
	@prop({ required: true })
	quantity: number;
	@arrayProp({ itemsRef: Requirements, _id: false })
	requirements?: Requirements[];
	@arrayProp({ items: String, _id: false })
	elements?: string[];
}

export class Work {
	@prop({ enum: Object.values(Likelihood) })
	likelihood?: Likelihood;
	@prop()
	nextAvailableSlot?: boolean;
	@prop()
	start?: string;
	@prop()
	end?: string;
	@prop()
	assignedOperatives?: number;
	@arrayProp({ items: String })
	preferredStaff?: string[];
	@arrayProp({ items: Object })
	staffArray?: object[];
	@prop()
	tlProjectManager?: string;
	@prop()
	tlAdminContact?: string;
	@prop()
	clientProjectManager?: string;
	@prop()
	clientSiteContact?: string;
	@prop()
	projectManagerTel?: string;
	@prop()
	siteContactTel?: string;
	@prop()
	notes?: string;
	@prop({ ref: WorkType })
	workType: WorkType;
	@prop({ required: true })
	completed: boolean;
}

export class JobSchema extends Typegoose {
	@prop({ required: true })
	_id: string;
	@prop({ required: true })
	title: string;
	@prop({ required: true })
	reference: number;
	@prop({ required: true })
	batchId: string;
	@prop({ required: true })
	batchName: string;
	@prop({ required: true })
	projectId: string;
	@prop({ required: true })
	projectName: string;
	@prop({ required: true })
	clientId: string;
	@prop({ required: true })
	clientName: string;
	@prop({ default: 'Not Booked', enum: Object.values(Status) })
	status: Status;
	@prop({ default: false })
	isOnHold: boolean;
	@prop()
	onHoldReason?: string;
	@prop()
	onHoldDetails?: string;
	@prop()
	onHoldDate?: string;
	@prop()
	lowerLimit?: string;
	@prop()
	higherLimit?: string;
	@prop()
	deletionRequestedBy?: string;
	@prop({ ref: SiteSchema, _id: false })
	site: ISite;
	@prop({ ref: JobContact, _id: false })
	contact: Ref<JobContact>;
	@prop()
	notes?: string;
	@prop()
	engineerNote?: string;
	@prop()
	purchaseOrder?: string;
	@prop({ required: true })
	twoMen: boolean;
	@prop({ required: true })
	sendReport: boolean;
	@prop({ required: true })
	work: Ref<Work>;
	@arrayProp({ itemsRef: Requirements, _id: false })
	requirements?: Requirements[];
	@prop({ ref: Failure, _id: false })
	failure?: Failure;
	@prop({ ref: Workflow, _id: false })
	workflow?: Workflow;
	@prop({ ref: Samples, _id: false })
	samples?: Samples;
	@arrayProp({ itemsRef: GoogleFile, _id: false })
	files: GoogleFile[];
	@arrayProp({ items: String })
	reportFileIds?: string[];
	@prop()
	reportDraftGenerated?: boolean;
	@arrayProp({ items: String })
	riskAssessments?: string[];
	@arrayProp({ items: String })
	tags?: string[];
	@prop({ required: true })
	createdBy: string;
	@prop({ required: true })
	createdAt: string;
}

export const Job = new JobSchema().getModelForClass(JobSchema, {
	schemaOptions: { collection: 'jobs' }
});

export type IJob = Without<JobSchema, 'getModelForClass' | 'setModelForClass' | 'buildSchema'>;
