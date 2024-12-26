import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({Key? key}) : super(key: key);

  @override
  _DashboardScreenState createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  final TextEditingController _idController = TextEditingController();
  Map<String, dynamic>? _deviceData;
  String? _errorMessage;

  Future<void> _fetchDeviceData() async {
    final inputId = _idController.text;

    if (inputId.isEmpty) {
      _showSnackBar('Please enter an ID', Colors.red);
      return;
    }

    try {
      final response = await http.get(
        Uri.parse('http://localhost:8080/device-parameters/$inputId'),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);

        if (data['error'] != null) {
          setState(() {
            _deviceData = null;
            _errorMessage = data['error'];
          });
        } else {
          setState(() {
            _deviceData = data;
            _errorMessage = null;
          });
        }
      } else {
        throw Exception('Failed to fetch data');
      }
    } catch (e) {
      setState(() {
        _deviceData = null;
        _errorMessage = e.toString();
      });
    }
  }

  void _showSnackBar(String message, Color color) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: color,
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Device Parameters'),
        backgroundColor: const Color.fromARGB(255, 158, 200, 248),
        foregroundColor: Colors.white,
        elevation: 6,
        shadowColor: Colors.black54,
      ),
      body: Container(
        color: Colors.white,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Input Card
              Card(
                elevation: 6,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                color: Colors.white,
                shadowColor: Colors.black12,
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Row(
                    children: [
                      Expanded(
                        child: TextField(
                          controller: _idController,
                          decoration: InputDecoration(
                            labelText: 'Enter Device ID',
                            labelStyle: TextStyle(color: Colors.blue[800]),
                            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Colors.blueAccent),
                              borderRadius: BorderRadius.circular(15),
                            ),
                          ),
                          keyboardType: TextInputType.number,
                          onSubmitted: (_) => _fetchDeviceData(),
                        ),
                      ),
                      const SizedBox(width: 16),
                      ElevatedButton.icon(
                        onPressed: _fetchDeviceData,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blueAccent,
                          padding: const EdgeInsets.all(16),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                        ),
                        icon: const Icon(Icons.search, size: 24),
                        label: const SizedBox.shrink(),
                      )
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 24),

              // Error Message
              if (_errorMessage != null)
                Text(
                  _errorMessage!,
                  style: const TextStyle(
                    color: Colors.red,
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),

              // Display Device Data
              if (_deviceData != null) ...[
                Text(
                  'Device Details for ID: ${_deviceData!["device_id"]}',
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    color: Colors.black87,
                  ),
                ),
                const SizedBox(height: 16),

                // Two Row Layout: Tension and V_Main_Battery
                Column(
                  children: [
                    // Row 1 - Tension
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 8),
                      child: _buildCard('Tension', '${_deviceData!["tension"]}', Colors.blue),
                    ),

                    // Row 2 - V_Main_Battery
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 8),
                      child: _buildCard('V_Main_Battery', '${_deviceData!["v_main_battery"]}', Colors.green),
                    ),
                  ],
                ),
              ],
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          _idController.clear();
          setState(() {
            _deviceData = null;
            _errorMessage = null;
          });
        },
        backgroundColor: Colors.blueAccent,
        child: const Icon(Icons.refresh),
        tooltip: 'Clear Data',
      ),
    );
  }

  Widget _buildCard(String title, String value, Color color) {
    return Card(
      elevation: 6,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
      ),
      color: color.withOpacity(0.1),
      shadowColor: Colors.black12,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.black87,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              value,
              style: const TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.w500,
                color: Colors.black,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
