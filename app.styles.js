import { StyleSheet } from "react-native"
import { colors } from "./src/styles/colors"

export const styles = StyleSheet.create({
  // Layout principal
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollView: {
    flexGrow: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 24
  },

  // Cabeçalho
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    
  },
  subTitle: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 24, 
    textAlign: "center"
  },

  // Cards e containers
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: colors.shadow || '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Formulários e inputs
  label: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500'
  },

  // Grid de moedas
  currencyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8 
  },

  // Botões
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56 
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonDisabled: {
    backgroundColor: colors.disabled,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },
  buttonTextDisabled: {
    color: colors.textSecondary,
  },

  // Estados interativos
  swapButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swapButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  },

  // Utilitários
  textCenter: {
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  hidden: {
    opacity: 0,
  },
  convertButton:{
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 24
},
convertButtonDisnable:{
    backgroundColor: colors.disabled
}
})

