const char* ssid = "SSID";
const char* password = "PASSWD";

// Assigned IP for MQTT Server
const char* mqtt_server = "10.0.0.5"; 
//const char* mqtt_user = "USERNAME_FOR_MOSQUITTO_BROKER";
//const char* mqtt_password = "PASSWORD_FOR_MOSQUITTO_BROKER";
uint16_t mqtt_port = 1883; // default

// topics
const char* temperatureTopic = "/home/weather/temperature";
const char* humidityTopic = "/home/weather/humidity";
const char* timeUpdatedTopic = "/home/weather/time";
