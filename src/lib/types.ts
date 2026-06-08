export type DeviceType =
  | "smart_switch" | "smart_plug" | "water_pump" | "cctv" | "smart_lock"
  | "door_sensor" | "motion_sensor" | "smoke_detector" | "gas_detector"
  | "water_level_sensor" | "power_meter" | "temperature_sensor"
  | "humidity_sensor" | "air_conditioner" | "smart_curtain"
  | "smart_ir_remote" | "light";

export type PropertyType =
  | "house" | "villa" | "apartment" | "guesthouse" | "boarding_house"
  | "office" | "retail_store" | "warehouse" | "industrial";

export interface Device {
  id: string;
  device_name: string;
  device_type: DeviceType;
  room_id: string | null;
  property_id: string;
  online_status: boolean;
  power_state: boolean;
  reading_value: number | null;
  reading_unit: string | null;
  manufacturer: string | null;
  last_seen: string;
}

export interface Room { id: string; room_name: string; property_id: string; icon: string | null; }
export interface Property {
  id: string; property_name: string; property_type: PropertyType;
  address: string | null; cover_color: string | null;
}

export const DEVICE_TYPE_LABEL: Record<DeviceType, string> = {
  smart_switch: "Smart Switch", smart_plug: "Smart Plug", water_pump: "Water Pump",
  cctv: "CCTV Camera", smart_lock: "Smart Lock", door_sensor: "Door Sensor",
  motion_sensor: "Motion Sensor", smoke_detector: "Smoke Detector",
  gas_detector: "Gas Detector", water_level_sensor: "Water Tank",
  power_meter: "Power Meter", temperature_sensor: "Temperature",
  humidity_sensor: "Humidity", air_conditioner: "Air Conditioner",
  smart_curtain: "Smart Curtain", smart_ir_remote: "IR Remote", light: "Light",
};
