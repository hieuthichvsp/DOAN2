# 1 "c:\\Users\\lolhi\\Documents\\Vsc_arduino\\DoAn2\\Arduino\\sketch.ino"
# 2 "c:\\Users\\lolhi\\Documents\\Vsc_arduino\\DoAn2\\Arduino\\sketch.ino" 2
# 3 "c:\\Users\\lolhi\\Documents\\Vsc_arduino\\DoAn2\\Arduino\\sketch.ino" 2




MFRC522 rfid(21, 22);
MFRC522::MIFARE_Key key;
byte nuidPICC[4];

void setup()
{
    Serial0.begin(9600);
    SPI.begin();
    rfid.PCD_Init();
    for (byte i = 0; i < 6; i++)
    {
        key.keyByte[i] = 0xFF;
    }
    Serial0.println(((reinterpret_cast<const __FlashStringHelper *>(("........................")))));
    Serial0.print(((reinterpret_cast<const __FlashStringHelper *>(("Using the following key:")))));
    printHex(key.keyByte, MFRC522::MF_KEY_SIZE);
}

void loop()
{
    if (!rfid.PICC_IsNewCardPresent())
        return;
    if (!rfid.PICC_ReadCardSerial())
        return;

    Serial0.print(((reinterpret_cast<const __FlashStringHelper *>(("PICC type: ")))));
    MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
    Serial0.println(rfid.PICC_GetTypeName(piccType));
    if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI &&
        piccType != MFRC522::PICC_TYPE_MIFARE_1K &&
        piccType != MFRC522::PICC_TYPE_MIFARE_4K)
    {
        Serial0.println(((reinterpret_cast<const __FlashStringHelper *>(("Your tag is not of type MIFARE Classic.")))));
        return;
    }

    if (rfid.uid.uidByte[0] != nuidPICC[0] ||
        rfid.uid.uidByte[1] != nuidPICC[1] ||
        rfid.uid.uidByte[2] != nuidPICC[2] ||
        rfid.uid.uidByte[3] != nuidPICC[3])
    {
        Serial0.println(((reinterpret_cast<const __FlashStringHelper *>(("A new card has been detected.")))));

        for (byte i = 0; i < 4; i++)
        {
            nuidPICC[i] = rfid.uid.uidByte[i];
        }
        Serial0.println(((reinterpret_cast<const __FlashStringHelper *>(("The NUID tag is:")))));
        Serial0.print(((reinterpret_cast<const __FlashStringHelper *>(("In hex: ")))));
        printHex(rfid.uid.uidByte, rfid.uid.size);
        Serial0.println();
        Serial0.print(((reinterpret_cast<const __FlashStringHelper *>(("In dec: ")))));
        printDec(rfid.uid.uidByte, rfid.uid.size);
        Serial0.println();
    }
    else
        Serial0.println(((reinterpret_cast<const __FlashStringHelper *>(("Card read previously.")))));
    rfid.PICC_HaltA();
    rfid.PCD_StopCrypto1();
}
void printHex(byte *buffer, byte bufferSize)
{
    for (byte i = 0; i < bufferSize; i++)
    {
        Serial0.print(buffer[i] < 0x10 ? " 0" : " ");
        Serial0.print(buffer[i], 16);
    }
}
void printDec(byte *buffer, byte bufferSize)
{
    for (byte i = 0; i < bufferSize; i++)
    {
        Serial0.print(buffer[i] < 0x10 ? " 0" : " ");
        Serial0.print(buffer[i], 10);
    }
}
