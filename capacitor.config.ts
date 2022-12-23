import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  server: {
    androidScheme: "http",
    allowNavigation: ["http://172.31.109.58"],
    cleartext: true,
  },
  appId: 'io.ionic.starter',
  appName: 'qlsv',
  webDir: 'build',
  bundledWebRuntime: false
};

export default config;
