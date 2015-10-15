window.addEventListener('WebComponentsReady', function () {

  console.log('Hello Sine!');

  // Your JavaScript code should be here...

  // Get a handle for the knob.
  var kFreq = document.querySelector('#k-freq');

  // Create web audio stuffs.
  var context = new AudioContext();
  var osc = context.createOscillator();
  var amp = context.createGain();
  
  // Bind the knob to the oscillator frequency.
  kFreq.bind(osc.frequency);

  // Make connections.
  osc.to(amp).to(context.DAC);

  // Schedule automations ahead.
  amp.gain.step(0.0, 0.0).line([0.5, 1.0], [0.0, 2.0]);

  // Then start audio.
  osc.start(0.0);
  osc.stop(2.0);

});
