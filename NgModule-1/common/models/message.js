module.exports = function (Message) {
  Message.greet = function (msg, cb) {
    process.nextTick(function () {
      var data = [{
        "firstName": "John",
        "lastName": "Smith",
        "age": 25,
        "address":
        {
          "streetAddress": "21 2nd Street",
          "city": "New York",
          "state": "NY",
          "postalCode": "10021"
        },
        "phoneNumber":
        [
          {
            "type": "home",
            "number": "212 555-1234"
          },
          {
            "type": "fax",
            "number": "646 555-4567"
          }
        ]
      },
      {
        "firstName": "Time",
        "lastName": "Snyder",
        "age": 30,
        "address":
        {
          "streetAddress": "31st street",
          "city": "New York",
          "state": "NY",
          "postalCode": "10029"
        },
        "phoneNumber":
        [
          {
            "type": "home",
            "number": "212 555-1234"
          },
          {
            "type": "fax",
            "number": "646 555-4567"
          }
        ]
      },
      {
        "firstName": "Json",
        "lastName": "Harold",
        "age": 55,
        "address":
        {
          "streetAddress": "300 north point pkwy",
          "city": "Alpharetta",
          "state": "GA",
          "postalCode": "84853"
        },
        "phoneNumber":
        [
          {
            "type": "home",
            "number": "212 555-1234"
          },
          {
            "type": "fax",
            "number": "646 555-4567"
          }
        ]
      },
      {
        "firstName": "Tonya",
        "lastName": "Berry",
        "age": 49,
        "address":
        {
          "streetAddress": "500 winward pkwy",
          "city": "Alpharetta",
          "state": "GA",
          "postalCode": "43231"
        },
        "phoneNumber":
        [
          {
            "type": "home",
            "number": "212 555-1234"
          },
          {
            "type": "fax",
            "number": "646 555-4567"
          }
        ]
      }]

      cb(null, data);
    });
  };
};
