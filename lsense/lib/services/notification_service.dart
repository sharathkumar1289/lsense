import 'dart:math';
import 'dart:ui';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/data/latest.dart' as tz;
import 'package:timezone/timezone.dart' as tz;
import 'dart:async'; // Import Timer

class NotificationService {
  static final NotificationService _notificationService = NotificationService._internal();
  final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();
  final Random _random = Random();
  Timer? _notificationTimer;

  factory NotificationService() {
    return _notificationService;
  }

  NotificationService._internal();

  Future<void> init() async {
    const AndroidInitializationSettings initializationSettingsAndroid =
        AndroidInitializationSettings('@mipmap/ic_launcher');

    final DarwinInitializationSettings initializationSettingsIOS =
        DarwinInitializationSettings(
      requestSoundPermission: true,
      requestBadgePermission: true,
      requestAlertPermission: true,
      onDidReceiveLocalNotification: (int id, String? title, String? body, String? payload) async {},
    );

    final InitializationSettings initializationSettings = InitializationSettings(
      android: initializationSettingsAndroid,
      iOS: initializationSettingsIOS,
    );

    await flutterLocalNotificationsPlugin.initialize(
      initializationSettings,
      onDidReceiveNotificationResponse: (NotificationResponse notificationResponse) async {},
    );

    tz.initializeTimeZones();
  }

  Future<void> requestPermissions() async {
    final bool? result = await flutterLocalNotificationsPlugin
        .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
        ?.requestPermissions(
          alert: true,
          badge: true,
          sound: true,
        );

    if (result == false) {
      print("Permissions were denied");
    } else {
      print("Permissions granted");
    }
  }


  double _generateRandomTension() {
    return double.parse((_random.nextDouble() * 30 + 20).toStringAsFixed(1));
  }

  String _getRandomPosition() {
    final positions = ['Top', 'Middle', 'Bottom'];
    return positions[_random.nextInt(positions.length)];
  }

  NotificationDetails _createNotificationDetails() {
    const AndroidNotificationDetails androidPlatformChannelSpecifics =
        AndroidNotificationDetails(
      'tension_monitor_channel',
      'Tension Monitor Updates',
      channelDescription: 'Periodic tension value updates',
      importance: Importance.high,
      priority: Priority.high,
      styleInformation: BigTextStyleInformation(''),
      color: Color(0xFF2196F3),
    );

    const DarwinNotificationDetails iOSPlatformChannelSpecifics =
        DarwinNotificationDetails(
      presentAlert: true,
      presentBadge: true,
      presentSound: true,
    );

    return const NotificationDetails(
      android: androidPlatformChannelSpecifics,
      iOS: iOSPlatformChannelSpecifics,
    );
  }

  void scheduleNotificationsEvery30Seconds() {
    _notificationTimer = Timer.periodic(const Duration(seconds: 30), (timer) async {
      await flutterLocalNotificationsPlugin.show(
        _random.nextInt(10000), // Unique ID for each notification
        'Tension Monitor Update',
        'Position: ${_getRandomPosition()}\nTension Value: ${_generateRandomTension()} N',
        _createNotificationDetails(),
      );
    });
  }

  void stopNotifications() {
    _notificationTimer?.cancel();
    flutterLocalNotificationsPlugin.cancelAll();
  }
  
}
