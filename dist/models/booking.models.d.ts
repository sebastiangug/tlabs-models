/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const BookingSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string | null | undefined;
        jobId: string | null | undefined;
        jobName: string | null | undefined;
        batchId: string | null | undefined;
        batchName: string | null | undefined;
        projectId: string | null | undefined;
        projectName: string | null | undefined;
        clientId: string | null | undefined;
        clientName: string | null | undefined;
        teamsId: string | null | undefined;
        engineerId: string | null | undefined;
        isAVO: boolean | null | undefined;
        startDate: Date | null | undefined;
        endDate: Date | null | undefined;
        isNotModifiable: boolean | null | undefined;
        isLockedToEngineer: boolean | null | undefined;
        actualStart: Date | null | undefined;
        actualEnd: Date | null | undefined;
        notes: string | null | undefined;
        status: string | null | undefined;
        statusDate: Date | null | undefined;
        ended: boolean | null | undefined;
        workCompleted: boolean | null | undefined;
        elementCompleted: string[] | null | undefined;
        imageId: string | null | undefined;
        confirmationCode: string | null | undefined;
        confirmationCodeReason: string | null | undefined;
        feedback: string | null | undefined;
        createdBy: string | null | undefined;
        createdAt: Date | null | undefined;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const Booking: import("mongoose").Model<import("mongoose").Document & {} & {
    ended?: boolean | null | undefined;
    _id?: string | null | undefined;
    clientId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    teamsId?: string | null | undefined;
    notes?: string | null | undefined;
    clientName?: string | null | undefined;
    status?: string | null | undefined;
    createdBy?: string | null | undefined;
    jobId?: string | null | undefined;
    jobName?: string | null | undefined;
    batchId?: string | null | undefined;
    batchName?: string | null | undefined;
    projectId?: string | null | undefined;
    projectName?: string | null | undefined;
    engineerId?: string | null | undefined;
    isAVO?: boolean | null | undefined;
    startDate?: Date | null | undefined;
    endDate?: Date | null | undefined;
    isNotModifiable?: boolean | null | undefined;
    isLockedToEngineer?: boolean | null | undefined;
    actualStart?: Date | null | undefined;
    actualEnd?: Date | null | undefined;
    statusDate?: Date | null | undefined;
    workCompleted?: boolean | null | undefined;
    elementCompleted?: string[] | null | undefined;
    imageId?: string | null | undefined;
    confirmationCode?: string | null | undefined;
    confirmationCodeReason?: string | null | undefined;
    feedback?: string | null | undefined;
}, {}>;
export declare type IBooking = ExtractProps<typeof BookingSchema>;
export {};