class Services {
  requestApi = () => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => response.json())
          .then((result) => localStorage.setItem('searchId', result.searchId))
        .catch(err => console.log(err))
    };

    newArray = []; 

    requestTickets = (func) => {
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${localStorage.getItem('searchId')}`)
      .then((result) => result.json())
      .then((response) => {
        if (!response.stop) this.requestTickets();
        this.newArray.push(response.tickets);
        func(this.newArray.flat(), response.stop);
      })
      .catch((err) => console.log(err));
  }
}
export default new Services();