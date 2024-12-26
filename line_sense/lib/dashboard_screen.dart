import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  _DashboardScreenState createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  final TextEditingController _idController = TextEditingController();
  Map<String, dynamic>? _selectedDetails;

  final List<Map<String, dynamic>> _dummyData = [
    {
      "id": "1",
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "department": "Engineering",
      "position": "Senior Developer"
    },
    {
      "id": "2", 
      "name": "Jane Smith",
      "age": 25,
      "email": "jane.smith@example.com",
      "department": "Marketing",
      "position": "Marketing Manager"
    }
  ];

  void _fetchDetails() {
    final selectedId = _idController.text;
    final details = _dummyData.firstWhere(
      (item) => item['id'] == selectedId, 
      orElse: () => {}
    );

    setState(() {
      _selectedDetails = details.isNotEmpty ? details : null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashboard'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () => Navigator.of(context).pushReplacementNamed('/login'),
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Card(
              elevation: 4,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    TextField(
                      controller: _idController,
                      decoration: InputDecoration(
                        labelText: 'Enter Employee ID',
                        suffixIcon: IconButton(
                          icon: const Icon(Icons.search),
                          onPressed: _fetchDetails,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),
            if (_selectedDetails != null)
              Card(
                elevation: 4,
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Employee Details',
                        style: Theme.of(context).textTheme.titleLarge,
                      ),
                      const SizedBox(height: 10),
                      _buildDetailRow('Name', _selectedDetails!['name']),
                      _buildDetailRow('Age', _selectedDetails!['age'].toString()),
                      _buildDetailRow('Email', _selectedDetails!['email']),
                      _buildDetailRow('Department', _selectedDetails!['department']),
                      _buildDetailRow('Position', _selectedDetails!['position']),
                    ],
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        children: [
          Text(
            '$label: ',
            style: const TextStyle(fontWeight: FontWeight.bold),
          ),
          Text(value),
        ],
      ),
    );
  }
}