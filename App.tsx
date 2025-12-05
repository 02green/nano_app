import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import RNPrint from 'react-native-print';

const NanoApp = () => {
  const [printing, setPrinting] = useState(false);

  const handlePrint = async () => {
    try {
      setPrinting(true);
      const html = `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
              body { font-family: 'Courier New', Courier, monospace; font-size: 17px; margin: 0; padding: 0; background: #fff; }
              .container { width: 384px; margin: 0 auto; text-align: left; box-sizing: border-box; padding-left: 10px; }
              pre { font-family: 'Courier New', Courier, monospace; font-size: inherit; margin: 0; padding: 0; white-space: pre-wrap; word-break: break-word; }
              .title { font-weight: bold; font-size: 22px; margin-bottom: 6px; }
            </style>
          </head>
          <body>
            <div class="container">
              <pre>
 <span class="title">TECHSOFT limited</span>
----------------------------------
hello, my name is female programmer
what would you like me to do today
am happy that your here today
----------------------------------
              </pre>
            </div>
          </body>
        </html>
      `;
      await RNPrint.print({ html });
    } catch (err) {
      // No endpoints; keep local behavior only
    } finally {
      setPrinting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TECHSOFT limited</Text>
      <View style={styles.card}>
        <Text style={styles.line}>hello, my name if female programmer</Text>
        <Text style={styles.line}>what would you like me to do today</Text>
        <Text style={styles.line}>am happy that your here today</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePrint} disabled={printing}>
        {printing ? <ActivityIndicator color="#FFF" /> : <Text style={styles.buttonText}>Print</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F9FF', padding: 16, justifyContent: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#1E90FF', textAlign: 'center', marginBottom: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginHorizontal: 20, elevation: 2 },
  line: { fontSize: 16, color: '#333', marginBottom: 8 },
  button: { backgroundColor: '#059669', paddingVertical: 14, borderRadius: 10, marginTop: 20, marginHorizontal: 60, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});

export default NanoApp;