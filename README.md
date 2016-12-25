# buggybit
Xmas 2016 play and learn with the kids

## Buggy bits
![img](media/buggybit.jpg)

## Buggy bat
![img](media/buggybat.jpg)
- Owen (54): What does a bat do to not hit a wall?
 - Lara (8): Eewww
- Joshua (10): Has it personality now?

# Play and learn
Some aspects
- just play with the buggy
- linefollowing: how to have fun with this (micro:bit sumai wrestling, push out of the circle)
- ultrasonic addition: distance and time
- fun with micro:bit controller: GUI with some leds and and 2 buttons
- and of course, Eddystone Beacon: for some fun additions

## Hardware

### Kitronic buggy with line follower for micro:bit
- https://www.kitronik.co.uk/5604-line-following-buggy-for-the-bbc-microbit.html
![img](media/5604_large_bbc_microbit_line_following_buggy.jpg)

#### Motor driver board
https://www.kitronik.co.uk/5620-motor-driver-board-for-the-bbc-microbit-v2.html
![img](media/motordriver.PNG)
- Button A/B avaiable (I/O ?)
- P1/2 I/O available
- P0/8/12/16 used for motor control
- With the further use of pins in connection with buttons, leds etc, add the least nr of pins at the edgeconnector
 - From Top as readable
  - gnd:
  - p20: i2c1-sda (can hopefully be used as standard i/o for ultrasonic)
  - p19: i2c1-scl (can hopefully be used as standard i/o for ultrasonic)
  - 3v: 3.3v out
  - p16: motor control so no need to solder
  - p15: spi1-mos1 (alternative for ultrasonic)
  - p14: spi1-mis1 (alternative for ultrasonic)
  - p15: spi1-sck (alternative for ultrasonic) 

#### Line following kit
- https://www.kitronik.co.uk/2125-lf-line-following-add-on-board-for-laser-tank.html
- Uses P1/2 
- https://github.com/microbit-drill/buggybit/tree/master/linefollower

### Ultrasonic module
![img](media/hr-sro4.jpg)
![img](media/trigecho.jpg)
![img](media/piultra.png)
- HR-SRO4
- Sonar: As seen from front, Left: T(ransmitter) Right: R(eciever)
- Pins: In order as can be read, top to bottom, Vcc, trig, echo, Gnd
- Vcc: TODO: find operating voltage range: looks like +5v
- trig/echo: TODO: ensure problem free trig/echo voltage levels: looks like TTL i/o 0-5v
 - use typical Raspberry Pi circuitary

## Software
- https://pxt.microbit.org/ as there is a block/package for the ping trig(pulse) and echo
- https://github.com/Microsoft/pxt-sonar 

## Problems to be solved

### Pins
Which pins for trigger echo and interface resistors for possible 3/5v interfacing micro:bit<->Ultransonic module
![img](media/edgeconnector.png)
- P19/20 are the candidates, if they can be made to "normal" i/o.
- it is also possible that further components could be connected with sufficient circuitary to interface i2c1 and from this, inteface to ultrasonic, contact feelers etc

### Bluetooth
micro:bit to micro:bit comunication: pairing and all that jazz

### Finishing!
Some form of closure to each part of the project
- micro:bit controller GUI as a probable need first
- ultrasonic hardware interfacing

## GUI
micro:bit as a GUI to control the buggy and the aspects of user interface
