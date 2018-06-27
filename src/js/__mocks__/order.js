module.exports = {
  send: (buying, amount, price) => {
    return new Promise((resolve, reject) => {
        let payload = {
          buying: buying,
          amount: parseFloat(amount),
          price: parseFloat(price)
        };
        let status = 200;
        if ( isNaN(payload.amount) || isNaN(payload.price) ) {
          status = 400;
        }
        resolve({ payload, status });
    })
  },
  handleOrderError: (errorObject) => {
    let errorText = 'Ha ocurrido un problema en el servidor';

    if ( errorObject && errorObject.errorText ) {
      // Si el back-end nos proveyera de un mensaje de error, mostramos ese mensaje
      return errorObject.errorText
    }
    
    if ( errorObject.status ) {
      switch(errorObject.status){
        case 400:
          errorText = 'Los datos enviados para generar la orden son invalidos';
        break;

        case 403:
          errorText = 'Usted no esta autorizado para realizar esta accion';
        break;

        default:
        break;
      }
    }

    return errorText;
  }
}