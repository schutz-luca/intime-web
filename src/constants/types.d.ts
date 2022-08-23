export interface IService {
    id: string
    name: string
    price: number;
    description: string
    provider: string
    duration: number
    cover: string
    provider: IProvider
}

export interface IAddress {
    street: string
    number: string
    district: string
    city: string
    state: string
    complement: string
    zipCode: string
}

export interface IProvider {
    id: string
    photo: string
    fullname: string
    doc: string
    isCompany: boolean
    email: string
    birthDate: string
    phone: string
    address: IAddress
}

export interface IClient {
    id: string
    photo: string
    doc?: string
    fullname: string
    email: string
    phone: string
    address: IAddress
}

export interface IScheduling {
    id: string
    payment: string
    client: string
    startDate: string
    endDate: string
    product: IService
}
