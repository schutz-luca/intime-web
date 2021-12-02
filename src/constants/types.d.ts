export interface IService {
    id: string
    name: string
    price: number;
    description: string
    provider: string
    duration: number
}

export interface IAddress{
    street: string
    number: string
    district: string
    city: string
    state: string
    components: string
    zipCode: string
}

export interface IProvider {
    id: string
    avatar: string
    fullname: string
    cpf: string
    email: string
    birthDate: string
    phone: string
    address: IAddress
}

export interface IClient {
    id: string
    avatar: string
    fullname: string
    email: string
    phone: string
    address: IAddress
}