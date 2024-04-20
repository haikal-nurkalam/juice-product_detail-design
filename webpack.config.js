// Import modul path dari Node.js
const path = require('path')

// Ekspor konfigurasi Webpack
module.exports = {
  // Mode pengembangan
  mode: 'development',

  // Entri utama dari aplikasi
  entry: './src/index.js',

  // Konfigurasi output
  output: {
    // Direktori output untuk file bundle
    path: path.resolve(__dirname, 'dist'),
    // Nama file bundle
    filename: 'bundle.js',
  },

  // Konfigurasi server pengembangan
  devServer: {
    // Konfigurasi static file server
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    // Port server pengembangan
    port: 3000,
    // Buka browser otomatis saat server berjalan
    open: true,
    // Aktifkan Hot Module Replacement (HMR)
    hot: true,
    // Kompresi untuk respons yang dikirim ke browser
    compress: true,
    // Pengaturan untuk mengaktifkan HTML5 History API fallback
    historyApiFallback: true,
  },

  // Konfigurasi modul
  module: {
    // Aturan untuk memproses file CSS
    rules: [
      {
        // Pengecekan ekstensi file CSS
        test: /\.css$/i,
        // Hanya memproses file CSS di dalam direktori 'src'
        include: path.resolve(__dirname, 'src'),
        // Loader yang digunakan untuk memproses file CSS
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
}
