export interface IDataSet {
    dsDesc: string,
    dsName: string,
    fields: IDataSetField[]
}

export interface IDataSetField {
    filedDesc: string,
    fieldName: string
}