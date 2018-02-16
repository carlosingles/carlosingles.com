var hash_old = "";
var userScrolling = false;
var domAnimated = false;

// hash functions
function get_hash() {
  var a = window.location.hash.replace("#!/", "");
  "/" == a.substr(a.length - 1) && (a = a.substr(0, a.length - 1));
  return a
};

function get_hash_segments() {
  var a = get_hash();
  return "" === a ? !1 : a.split("/")
};

function get_hash_segment(a) {
  var b = window.location.hash.replace("#!/", "");
  return !a || -1 == b.indexOf(a) ? !1 : RegExp("(" + a + "/)([a-zA-Z0-9_-]*)", "gi").exec(b)[2]
};

function update_hash(a, b) {
  var d = get_hash_segment(a),
      c = "";
  d ? window.location.hash = window.location.hash.replace(a + "/" + d, a + "/" + b) : (-1 == window.location.hash.indexOf("#!/") && (c += "#!/"), c += a + "/" + b + "/", window.location.hash += c)
};

function set_hash(a) {
  window.location.hash = "#!/" + a
};

// document setup
$(document).ready(function(){
  // initial hash value
  hash = get_hash();
  if(!hash){
    set_hash("");
  }else{
    domAnimated = true;
    $('html, body').scrollTo('#marker-'+hash, 300, {offset : { top: -66, left:0 }, onAfter: function(){
      domAnimated = false;
    }});
  }

  // languages card
  $("#languages").click(function(e){
    $(".skills .front-card").animate({marginTop: "-370px"}, 500);
  });
  $("#languages-close").click(function(e){
    $(".skills .front-card").animate({marginTop: "0px"}, 500);
  });

  // mobile menu
  $(".mobile-only.menu").click(function(e){
    $("nav.links").slideToggle();
  });

  // nav links
  $("nav.links li a").click(function(e){
    hash = $(this).attr("href");
    hash = hash.replace("#!/", "");
    if(hash.length > 0 && !domAnimated){
      domAnimated = true;
      $('html, body').scrollTo('#marker-'+hash, 300, {offset : { top: -66, left:0 }, onAfter: function(){
        domAnimated = false;
      }});
    }
  });

  // hero button
  $(".hero-text .button").click(function(e){
    hash = $(this).attr("href");
    hash = hash.replace("#!/", "");
    if(hash.length > 0 && !domAnimated){
      domAnimated = true;
      $('html, body').scrollTo('#marker-'+hash, 300, {offset : { top: -66, left:0 }, onAfter: function(){
        domAnimated = false;
      }});
    }
  });

  // projects list
  $(".projects-list li").click(function(e){
    $(".projects-list .active").removeClass("active");
    slide = $(this).attr("data-slide");
    width = $(".work-presentation .project").css("width");
    $(this).addClass("active");
    slideValue = slide * parseInt(width);
    $(".work-presentation .wrapper").animate({marginLeft: "-"+slideValue+"px" }, 300, function(){

    });
  });

  // waypoints
  $('body').waypoint(function(direction) {
    direction=="down" ? set_hash("") : set_hash("");
  }, { offset: "66px" });

  $('#marker-skills').waypoint(function(direction) {
    if(direction == "down"){
      set_hash("skills")
      $("header").addClass("dark");
    }else{
      set_hash("");
      $("header").removeClass("dark");
    }
  }, { offset: "66px" });

  $('#marker-work').waypoint(function(direction) {
    direction=="down" ? set_hash("work") : set_hash("skills");
  }, { offset: "66px" });

  $('#marker-contact').waypoint(function(direction) {
    direction=="down" ? set_hash("contact") : set_hash("work");
  }, { offset: 'bottom-in-view' });

})
