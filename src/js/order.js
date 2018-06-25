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
  }
}