function Apply_Stats() {
    console.log(identity_made[0]);
    document.getElementById("identity_send").value = identity_made[0];
    document.getElementById("size_send").value = document.getElementById("size").value;
    document.getElementById("color_send").value = document.getElementById("color").value;
    document.getElementById("decoration_send").value = document.getElementById("decoration").value;
    document.getElementById("time_send").value = Get_Time()
  }
