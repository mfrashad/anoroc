const tintColor = '#2f95dc';

import Colors from './Colors';

export default {
    roundedButton: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 50,
        marginBottom: 16,
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: Colors.primaryColor,
        elevation: 3
    },
    outlineButton: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: Colors.darkColor
    },
    outlineButtonText: {
      fontSize: 15,
      color: '#141414'
    },
    buttonText: {
      fontSize: 15,
      color: '#FFFFFF'
    },
};
