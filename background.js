const panel=chrome.runtime.getURL('index.html');
async function openPanel(){const tabs=await chrome.tabs.query({url:panel});if(tabs.length){await chrome.tabs.update(tabs[0].id,{active:true});await chrome.windows.update(tabs[0].windowId,{focused:true});}else await chrome.tabs.create({url:panel});}
chrome.action.onClicked.addListener(openPanel);
chrome.runtime.onInstalled.addListener(()=>{chrome.contextMenus.create({id:'import-draphos',title:'Importar para Draphos Prospect',contexts:['selection']});});
chrome.contextMenus.onClicked.addListener(async info=>{if(info.menuItemId!=='import-draphos'||!info.selectionText)return;await chrome.storage.local.set({pendingImport:{text:info.selectionText}});await openPanel();});
