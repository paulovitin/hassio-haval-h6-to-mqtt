const yup = require('yup');

module.exports = yup.object({
  MQTT_HOST: yup.string().matches(/^mqtt:\/\/[a-zA-Z0-9.-]+(:\d+)?\/?$/).required('MQTT Host is missing'),
  MQTT_PASS: yup.string(),
  MQTT_USER: yup.string().required(),
  VIN: yup.string().required(),
  USERNAME: yup.string().required('Username from Haval APP'),
  PASSWORD: yup.string().required('Password from Haval APP')
});
