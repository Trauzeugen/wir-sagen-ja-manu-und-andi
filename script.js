function getDeviceType() {
  const width = window.innerWidth;

  if (width <= 480) {
    return 'smartphone';
  } else if (width <= 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

const device = getDeviceType();
console.log('Gerätetyp erkannt:', device);

$('#magazine').turn({
  display: device === 'smartphone' ? 'single' : 'double',
  width: device === 'smartphone' ? window.innerWidth * 0.9 :
         device === 'tablet' ? 800 : 1152,
  height: device === 'smartphone' ? window.innerWidth * 0.65 :
          device === 'tablet' ? 520 : 748,
  elevation: 50,
  gradients: true
});
