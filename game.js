let enemyHp = 100;

function attack() {
  const damage = Math.floor(Math.random() * 20) + 5;
  enemyHp -= damage;

  document.getElementById("enemyHp").textContent = enemyHp;

  if (enemyHp <= 0) {
    alert("勝利！");
    enemyHp = 100;
    document.getElementById("enemyHp").textContent = enemyHp;
  }
}
