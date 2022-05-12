let vel = prompt ( ' coloque a velocidade do carro');

if(vel > 80){
    let multa = (vel - 80)*5;
    alert(`Você está acima do limite. a multa é de ${multa}`);
}else{
    alert(`Você está dentro do limite`);
}