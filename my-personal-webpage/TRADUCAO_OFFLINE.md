# 🌐 Sistema de Tradução Offline

## ✨ Características

✅ **100% Offline** - Sem APIs externas, sem custos  
✅ **Instantâneo** - Tradução imediata sem latência  
✅ **Responsivo** - Botão na navbar (desktop) e flutuante (mobile)  
✅ **Bilíngue** - Português ⇄ Inglês com um clique  

## 🚀 Como Funciona

O sistema usa um **dicionário pré-definido** em JavaScript que mapeia todo o conteúdo da página do português para o inglês. Quando você clica no botão:

1. O script percorre todos os elementos da página
2. Substitui os textos usando o dicionário de traduções
3. Preserva formatação HTML (negrito, links, etc)
4. Atualiza o título da página
5. Alterna o texto do próprio botão

## 📱 Versões do Botão

### Desktop (> 768px)
- Botão integrado na navbar
- Texto: "🌐 Translate to English"
- Em telas < 1024px: apenas ícone 🌐

### Mobile (≤ 768px)
- Botão flutuante no canto inferior direito
- Separado do menu de navegação
- Design touch-friendly

## 🔧 Personalização

### Adicionar novas traduções

Edite `js/translate-offline.js` e adicione no objeto `translations`:

```javascript
const translations = {
    'Seu texto em português': 'Your text in English',
    // ...
};
```

### Alterar cores do botão

Edite `css/styles.css` nas seções do botão de tradução:

```css
#translateBtn {
    background: linear-gradient(135deg, #SUACOR1, #SUACOR2);
}
```

## 📁 Arquivos Modificados

- `index.html` - Botões adicionados
- `js/translate-offline.js` - Lógica de tradução (NOVO)
- `css/styles.css` - Estilos dos botões

## 💡 Vantagens vs API

| Característica | Offline | API (ChatGPT) |
|---|---|---|
| Custo | Grátis | ~$0.002/tradução |
| Velocidade | Instantânea | 2-5 segundos |
| Internet | Não precisa | Obrigatória |
| Configuração | Nenhuma | API Key necessária |
| Qualidade | Consistente | Pode variar |
| Manutenção | Manual | Automática |

## 🎯 Uso

1. Abra seu site
2. Clique em "🌐 Translate to English"
3. Página traduz instantaneamente
4. Clique novamente para "Traduzir para Português"

---

**Desenvolvido sem dependências externas** ⚡
