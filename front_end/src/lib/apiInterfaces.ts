export interface MessageBodyInterface {
  phoneNumber: string;
  message: string;
}

export interface MessageBodyInterfaceResponse extends MessageBodyInterface {
  date: string;
  id: string;
}
