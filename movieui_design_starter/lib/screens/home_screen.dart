// ignore_for_file: sort_child_properties_last

import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: bottomNavigation(),
    );
  }
  BottomNavigationBar bottomNavigation() {
    return BottomNavigationBar(
      items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(
          icon: Icon(
            Icons.home,
            color: Colors.black,
          ),
          label: "",
        ),

        BottomNavigationBarItem(
          icon: Icon(
            Icons.phone,
            color: Colors.black,
          ),
          label: "",
        ),

        BottomNavigationBarItem(
          icon: Icon(
            Icons.mail,
            color: Colors.black,
          ),
          label: "",
        ),

        BottomNavigationBarItem(
          icon: Icon(
            Icons.person,
            color: Colors.black,
          ),
          label: "",
        ),

      ],

    );

  }
}