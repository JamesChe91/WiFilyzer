export class CurrentNetwork {
    iface: string; // network interface used for the connection, not available on macOS
    ssid: string;
    bssid: string;
    mac: string; // equals to bssid (for retrocompatibility)
    channel: number;
    frequency: number; // in MHz
    signal_level: number; // in dB
    security: string;
    security_flags: string; // encryption protocols (format currently depending of the OS)
    mode: string;
}
