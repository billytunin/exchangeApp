module.exports = {
  send: (buying, amount, price) => {
    return new Promise((resolve, reject) => {
      // Simular un llamado al endpoint que enviaría la orden
      setTimeout(() => {
        let payload = {
          buying: buying,
          amount: parseFloat(amount),
          price: parseFloat(price)
        };
        let status = 200;
        resolve({ payload, status });
      }, 2000);
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