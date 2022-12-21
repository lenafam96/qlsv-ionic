import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  server: {
    androidScheme: "http",
    allowNavigation: ["http://172.31.109.52:8000/students/"],
    cleartext: true,
  },
  appId: 'com.example.app',
  appName: 'qlsv',
  webDir: 'build',
  bundledWebRuntime: false
};

export default config;
