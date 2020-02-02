axios.get('http://35.222.157.224/api')
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      console.log(response.data[i])
    }
  });