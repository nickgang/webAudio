window.addEventListener('WebComponentsReady', function () {

  console.log('Hello Sine!');

  // Your JavaScript code should be here...

  var context = new AudioContext();
  var osc = context.createOscillator();
  var amp = context.createGain();

  // Make connections.
  osc.to(amp).to(context.DAC);

  // Schedule automations ahead.
  amp.gain.step(0.0, 0.0).line([0.5, 1.0], [0.0, 2.0]);

  // Then start audio.
  osc.start(0.0);
  osc.stop(2.0);

});
