function calculateTheMoneyOfElectricity(){
    let powerConsumption = parseInt(prompt("Enter the number Power consumption"));
    const TIER_ONE = 1484;
    const TIER_TRUE = 1533;
    const TIER_THREE = 1786;
    const TIER_FOUR = 2242;
    const TIER_FIVE = 2503;
    const TIER_SIX = 2587;
    let arrTier = [51, 101, 201, 301, 401];
    if (powerConsumption > 0) {
        let moneyElectric;
        for (let i = 0; i < arrTier.length - 1; i++) {
            if (powerConsumption > arrTier[4]) {
                moneyElectric = powerConsumption * TIER_SIX;
                alert("Money electric is " + moneyElectric + " VNĐ");

            } else if (powerConsumption > arrTier[3]||powerConsumption==arrTier[3]) {
                moneyElectric = powerConsumption * TIER_FIVE;
                alert("Money electric is " + moneyElectric + " VNĐ");

            } else if (powerConsumption > arrTier[2]||powerConsumption==arrTier[2]) {
                moneyElectric = powerConsumption * TIER_FOUR;
                alert("Money electric is " + moneyElectric + " VNĐ");

            } else if (powerConsumption > arrTier[1]||powerConsumption==arrTier[1]) {
                moneyElectric = powerConsumption * TIER_THREE;
                alert("Money electric is " + moneyElectric + " VNĐ");

            } else if(powerConsumption>arrTier[0]||powerConsumption==arrTier[0]){
                moneyElectric = powerConsumption * TIER_TRUE;
                alert("Money electric is " + moneyElectric + " VNĐ");
            }else{
                moneyElectric = powerConsumption * TIER_ONE;
                alert("Money electric is " + moneyElectric + " VNĐ");
            }
        }
    }else{
        alert("Enter repeat!");
    }

}