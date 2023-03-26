import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller('payment')
export class PaymentController {
  constructor(@Inject('TICKET_SERVICE') private ticketClient: ClientProxy) {}

  @MessagePattern('doPayment')
  doPayment(data: any) {
    // todo: do payment
    console.log(
      'ticket ordered, calling thrid party payment service now. paid base on this=',
      data,
    );
    // emit a event to ticket srevice
    this.ticketClient.emit('payment_sucess', { success: true });
    return { status: true };
  }
}
