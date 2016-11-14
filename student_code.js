/* Octavien Han
CS 1301 SECTION B4
GTID: 903215186
I collaborated with Sabrina Seibel*/

kiwi_caught = 0;

function process_frame() {
  if (is_down('b')){
    brake_truck();
  }
  else if (is_down('left')) {
    translate_truck_left();
  }
  else if (is_down('right')) {
    translate_truck_right();
  }
  else {
    coast_truck();
  }
  compute_truck_position();
  if (Math.random()*100 < kiwi_rate) {
      create_kiwi();
  }
}

function translate_truck_right() {
    if (get_truck_velocity() < 20) {
	     set_truck_velocity(get_truck_velocity() + 2.2);
     }
}

function translate_truck_left() {
  if (get_truck_velocity() > -20) {
     set_truck_velocity(get_truck_velocity() - 2.2);
   }
}


function coast_truck() {
  if (get_truck_velocity() != 0) {
    if (get_truck_velocity()>0) {
        set_truck_velocity(get_truck_velocity()*.96);
    }
    else if (get_truck_velocity()<0) {
        set_truck_velocity(get_truck_velocity()*.96);
    }
  }
}

function brake_truck() {
	if (get_truck_velocity()>0){
    set_truck_velocity(get_truck_velocity()*.8);
  }
  else if (get_truck_velocity() < 0){
    set_truck_velocity(get_truck_velocity()*.8);
  }
}

function compute_truck_position() {
  newLeft = get_truck_left() + get_truck_velocity();
  if (newLeft < 0) {
      set_truck_velocity(-.5*get_truck_velocity());
  }
  else if (newLeft > window.innerWidth-250) {
    set_truck_velocity(-.5*get_truck_velocity());
  }
  newLeft = get_truck_left() + get_truck_velocity();
	set_truck_left(newLeft);
}

// MUST BE IN BED OF TRUCK
function find_collisions(kiwi) {
  if (get_kiwi_y(kiwi)>window.innerHeight-5){
    if(get_kiwi_x(kiwi)>get_truck_left()){
      if(get_kiwi_x(kiwi)<get_truck_left()+112){
              delete_kiwi(kiwi);
              document.getElementById("kiwi-count").innerHTML = ++kiwi_caught
      }
    }
  }
}

function game_over() {
    alert("Congrats!","You caught " + kiwi_caught + " kiwi! Press the button again to start a new game!","New Game");
    document.getElementById("kiwi-count").innerHTML = 0;
    kiwi_caught = 0;
}

// just ignore this (‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌but don't delete it‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌):
check_latest = 2;
