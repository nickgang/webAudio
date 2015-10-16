window.addEventListener('WebComponentsReady', function () {

  console.log('This prints to the console');

  // Your JavaScript code should be here...

  // Get handles for the knobs.
  var kFreq = document.querySelector('#k-freq');
  var kCutoff = document.querySelector('#k-cutoff');
  var kReso = document.querySelector('#k-reso');
  var kAmp = document.querySelector('#k-amp');
    
  // Create web audio stuffs.
  var context = new AudioContext();
  var osc = context.createOscillator();
  var lpf = context.createBiquadFilter();
  var amp = context.createGain();
  
  osc.type = 'sawtooth';
  amp.gain.value = 0.25;
  
  // Bind the knob to the oscillator frequency.
  kFreq.bind(osc.frequency);
  kCutoff.bind(lpf.frequency);
  kReso.bind(lpf.Q);
  kAmp.bind(amp.gain);

  // Make connections.
  osc.to(lpf).to(amp).to(context.DAC);

  // TODO: Try AudioParam automation.
  

  // Then start audio.
  osc.start();

});
