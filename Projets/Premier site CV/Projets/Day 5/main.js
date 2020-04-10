const panels = document.querySelectorAll('.panel');

//  var active_panel

  function toggleOpen(){
    var open = this.classList.contains('open');
    panels.forEach(panel => panel.classList.remove('open'));
    if(!open)this.classList.add('open');
  }

  function toggleActive(e){
    if(e.propertyName.includes('flex')){
      this.classList.toggle('open-active');
    }
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));