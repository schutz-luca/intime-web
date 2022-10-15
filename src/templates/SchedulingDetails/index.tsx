/**
 * IMPORTS
 */
import { Avatar } from "components/avatar";
import { Row } from "components/form/row";
import { Modal } from "components/modal"
import { TextViewer } from "components/textviewer";
import { ISchedulingDetailsProps } from "./index.d";
import { $AvatarContainer, $Title } from "./styles";

/**
 * I am the modal for scheduling details
 */
export const SchedulingDetails = (props: ISchedulingDetailsProps) => {
    const { scheduling } = props;

    let address;

    if (scheduling)
        address = scheduling.product.provider.address

    return (
        <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
            <$Title>Informações do Provedor</$Title>
            <$AvatarContainer>
                <Avatar src={scheduling?.product.provider.photo} size="140px" />
            </$AvatarContainer>

            <Row>
                <TextViewer label="Nome" text={scheduling?.product?.provider.fullname} />
                <TextViewer label="Categoria" text={scheduling?.product?.provider.category.name} />
            </Row>
            <Row>
                <TextViewer label="Celular" text={scheduling?.product?.provider.phone} copyButton={true} />
                <TextViewer label="E-mail" text={scheduling?.product?.provider.email} />
            </Row>

            <Row>
                <TextViewer label="Endereço" text={`${address?.street}, ${address?.number} - ${address?.district}, ${address?.city} - ${address?.state}`} copyButton={true} />
            </Row>

            <$Title className="sub">Detalhes do Agendamento</$Title>
            <Row>
                <TextViewer label="Serviço" text={scheduling?.product.name} />
                <TextViewer label="Duração" text={`${scheduling?.product.duration} minutos`} />

            </Row>
            <Row>
                <TextViewer label="Descrição" text={scheduling?.product?.description} />

            </Row>


        </Modal>
    )
}