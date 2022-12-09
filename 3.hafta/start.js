const express = require('express');
const app = express();

app.listen(5000);

let machineamount=
  {
      "water":400,
      "milk":540,
      "coffee":120,
      "cups":9,
      "money":550
  }

app.get('/buy/:_type/:_amount', (req, res) => {
  

  const espresso = {
    water: "250",
    coffee: "16",
    money: "4",
    cup: "1"
  }
  
  const latte = {
    water: "350",
    milk: "75",
    coffee: "20",
    money: "7",
    cup: "1"
  }
  
  const cappuccino = {
    water: "200",
    milk: "100",
    coffee: "12",
    money: "6",
    cup: "1"
  }
  if(req.params._type=="espresso")
            {
              if(machineamount.water<(espresso.water*req.params._amount) || machineamount.coffee<(espresso.coffee*req.params._amount) || machineamount.cups<(espresso.cup*req.params._amount))
              {
               res.send("There is not enough material in the coffee machine");
              }
              else
              {
                res.send("I give you "+req.params._type+" "+req.params._amount);
                machineamount.water=machineamount.water-(espresso.water*req.params._amount);
                machineamount.coffee=machineamount.coffee-(espresso.coffee*req.params._amount);
                machineamount.money=machineamount.money+(espresso.money*req.params._amount);
                machineamount.cups=machineamount.cups-(espresso.cup*req.params_amount);
              }
            }if(req.params._type=="latte")
            {
              if(machineamount.water<(latte.water*req.params._amount) || machineamount.milk<(latte.milk*req.params._amount) || machineamount.coffee<(latte.coffee*req.params._amount) || machineamount.cups<(latte.cup*req.params._amount))
              {
               res.send("There is not enough material in the coffee machine");
              }
              else
              {
                res.send("I give you "+req.params._type+" "+req.params._amount);
                machineamount.water=machineamount.water-(latte.water*req.params._amount);
                machineamount.milk=machineamount.milk-(latte.milk*req.params_amount);
                machineamount.coffee=machineamount.coffee-(latte.coffee*req.params_amount);
                machineamount.money=machineamount.money+(latte.money*req.params_amount);
                machineamount.cups=machineamount.cups-(latte.cup*req.params_amount);
              }      
            }
            if(req.params._type=="cappuccino")
            {
              if(machineamount.water<(cappuccino.water*req.params_amount) || machineamount.milk<(cappuccino.milk*req.params_amount) || machineamount.coffee<(cappuccino.coffee*req.params_amount) || machineamount.cups<(cappuccino.cup*req.params_amount))
              {
               res.send("There is not enough material in the coffee machine");
              }
              else
              {
                res.send("I give you "+req.params._type+" "+req.params._amount);
                machineamount.water=machineamount.water-(cappuccino.water*req.params_amount);
                machineamount.milk=machineamount.milk-(cappuccino.milk*req.params_amount);
                machineamount.coffee=machineamount.coffee-(cappuccino.coffee*req.params_amount);
                machineamount.money=machineamount.money+(cappuccino.money*req.params_amount);
                machineamount.cups=machineamount.cups-(cappuccino.cup*req.params._amount);
              }
             
          }
  
  })

  app.get('/take', (req, res) => {

    res.send("I gave you $"+machineamount.money)
    machineamount.money=0;

  })

  app.get('/remaining', (req, res) => {

  res.send("The coffee machine has: <br>"+
   machineamount.water+ "ml water <br>"+
   machineamount.milk+
  " ml milk <br>"+machineamount.coffee+
  " g coffee <br>"+
  machineamount.cups+" cups <br>"+"$"+
  machineamount.water+" money");

})


app.get('/fill/:_type/:_amount', (req, res) => {

  res.send("Filling "+req.params._type+" for "+req.params._amount);

})