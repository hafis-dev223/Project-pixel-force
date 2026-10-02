function tombolKematian() {
  const Username = ["hafis123", "sugianto123"];
  const Passwordd = ["hafis123h", "sugianto123j"];

  const username = document.getElementById("ES").value;
  const password = document.getElementById("Ps").value;
  const TombolLogin = document.getElementById("btnLogin");

  if (!username || !password) {
    alert("maaf input tidak boleh kosong silahkan isi ");
    return;
  }

  if (password.length < 8) {
    alert("maaf password harus 8 huruf");
    return;
  }
  if (Username.includes(username) && Passwordd.includes(password)) {
    TombolLogin.innerHTML = "Memproses...";
    TombolLogin.style.backgroundColor = " #ffff";

    setTimeout(function () {
      alert(`selamat datang ${username} silahkan menikmati menu terbaik kami`);
      window.location.href = "../coffeshop.html";
    }, 2000);
  } else {
    alert("maaf username/email anda dan password tidak di temukan");
  }
}
