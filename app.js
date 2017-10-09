function bill(a,q){
  this.amount = a;
  this.quantity = b;
}
var moneyGiven =[];
var box =[];
box.push(new bill(100,100));
box.push(new bill(50,50));
box.push(new bill(20,200));
box.push(new bill(10,300));
box.push(new bill(5,500));
box.push(new bill(1,800));

var money = 0;
var moneyInPaper = 0;
var div = 0;
var result = 0;

function giveMoneyToPerson (){
  /*primero, preguntar al usuario que cantidad de dinero va a
  retirar y ese monto pasa a la operación*/
  money = parseInt(prompt('Ingresa el monto que desea reirar del cajero'));
/*Si el monto es mayor a cero se pasa a dividir con el primer monto
que tiene disponible el cajero, sino, pasa al sgte monto */
  var case1 = (money>0)?div=Math.floor(money/bill.a):' ';
    document.write(case1);
    if(case1==true && div>bill.q){
      /* si la cantidad necesaria para brindar al usuario
      no supera a la cantidad que se tiene en reserva*/
      moneyInPaper=bill.q;
    }else{
      /* si la cantidad que se tiene en reserva es menor a
      la cantidad que se necesita para hacer el retiro se
      pasa a utilizar la cantidad que hubiere o en caso contrario
      pasar a la sgte operacion*/
      moneyInPaper=div;
    }
    /*se va agregando al array vacio de moneyGiven el monto del dinero*/
  moneyGiven.push(new bill(bill.a,moneyInPaper));
//se resta con el monto hasta obtener 0 el cual significa que se le ha entregado
//la cantidad que solicitaba.
  money = money - (bill.a*moneyInPaper);
}
  if (monto==0){
    // si el dinero solicitado es superior al monto en total
    //que tiene el cajero se imprme la sgte cadena
    document.write('No tengo dinero, no puedo realizar el retiro');
  }else{
    // si si se pudo entrgar la cantidad de dinero que se pedia, imprimir
    //el sgte codigo
    document.write(result.q+' billetes de S/.'+result.a);
  }
