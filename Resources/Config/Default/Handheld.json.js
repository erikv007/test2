{ 
    "configuration" : { 
        "version" : "1.1",
        "application" : { 
            "proxyUri" : "/proxy.ashx?",
            "allowUnsafeContent" : false,
            "offlineStorageSpaceMb" : "250",
            "geometryServiceUrl" : "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
        },
        "defaultLibraryId" : "Mapping",
        "libraries" : [ { 
            "id" : "Mapping",
            "uri" : "Resources/Compiled/Mapping.js",
            "locales" : [ { 
                "locale" : "en-US",
                "uri" : "Resources/Locales/en-US.json.js"
            } ]
        } ],
        "modules" : [ { 
            "moduleName" : "Log",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.log.LogModule",
            "views" : [ { 
                "id" : "LogView",
                "viewModelId" : "LogViewModel",
                "visible" : false,
                "isManaged" : false,
                "title" : "@language-common-view-log",
                "iconUri" : "Resources/Images/Icons/log.png",
                "description" : "@language-log-app-log",
                "markup" : "Mapping/modules/Log/LogView.html",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.log.LogView",
                "region" : "ApplicationRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "LogViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.log.LogViewModel",
                "configuration" : { }
            } ]
        }, { 
            "moduleName" : "Alert",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.alert.AlertModule",
            "configuration" : { 
                "alertRegion" : "ModalWindowRegion",
                "overrideNativeAlert" : true
            }
        }, { 
            "moduleName" : "Authentication",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.authentication.AuthenticationModule",
            "configuration" : { 
                "region" : "ApplicationRegion"
            }
        }, { 
            "moduleName" : "Confirm",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.confirm.ConfirmModule",
            "configuration" : { 
                "confirmRegion" : "ModalWindowRegion",
                "overrideNativeConfirm" : true
            }
        }, { 
            "moduleName" : "FeatureDetails",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsModule",
            "configuration" : { 
                "providers" : [ { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesViewModel",
                    "viewType" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttributesView",
                    "markup" : "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttributesView.html"
                }, { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsViewModel",
                    "viewType" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.AttachmentsView",
                    "markup" : "Mapping/modules/FeatureDetails/FeatureDetailsProviders/AttachmentsView.html"
                }, { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesViewModel",
                    "viewType" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.RelatedFeaturesView",
                    "markup" : "Mapping/modules/FeatureDetails/FeatureDetailsProviders/RelatedFeaturesView.html",
                    "config" : { 
                        "relatedFeatureView" : "ResultsViewContainerRegion"
                    }
                }, { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsViewModel",
                    "viewType" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsProviders.FeatureActionsView",
                    "markup" : "Mapping/modules/FeatureDetails/FeatureDetailsProviders/FeatureActionsView.html"
                } ]
            },
            "views" : [ { 
                "id" : "FeatureDetailsView",
                "viewModelId" : "FeatureDetailsViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsView",
                "markup" : "Mapping/modules/FeatureDetails/FeatureDetailsView.html",
                "region" : "ResultsViewContainerRegion",
                "visible" : false,
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "FeatureDetailsViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.FeatureDetails.FeatureDetailsViewModel",
                "configuration" : { 
                    "viewToActivate" : "FeatureDetailsView"
                }
            } ]
        }, { 
            "moduleName" : "Identify",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.identify.IdentifyModule",
            "configuration" : { 
                "pixelTolerance" : 10,
                "polygonPixelTolerance" : 5,
                "returnGeometry" : true,
                "tools" : [ { 
                    "name" : "IdentifyPointTool",
                    "command" : "Identify",
                    "drawMode" : "POINT",
                    "isSticky" : false,
                    "iconUri" : "Resources/Images/Icons/identify-24.png",
                    "statusText" : "@language-mbl-identify-point-tool"
                }, { 
                    "name" : "IdentifyRectangleTool",
                    "command" : "Identify",
                    "drawMode" : "EXTENT",
                    "isSticky" : false,
                    "iconUri" : "Resources/Images/Icons/identify-rectangle-24.png",
                    "statusText" : "@language-identify-rectangle-tool"
                }, { 
                    "name" : "IdentifyPolylineTool",
                    "command" : "Identify",
                    "drawMode" : "POLYLINE",
                    "isSticky" : false,
                    "iconUri" : "Resources/Images/Icons/identify-polyline-24.png",
                    "statusText" : "@language-identify-polyline-tool"
                }, { 
                    "name" : "IdentifyFreehandPolylineTool",
                    "command" : "Identify",
                    "drawMode" : "FREEHAND_POLYLINE",
                    "isSticky" : false,
                    "iconUri" : "Resources/Images/Icons/identify-freehand-24.png",
                    "statusText" : "@language-identify-freehand-polyline-tool"
                }, { 
                    "name" : "IdentifyPolygonTool",
                    "command" : "Identify",
                    "drawMode" : "POLYGON",
                    "isSticky" : false,
                    "iconUri" : "Resources/Images/Icons/identify-polygon-24.png",
                    "statusText" : "@language-identify-polygon-tool"
                }, { 
                    "name" : "IdentifyFreehandPolygonTool",
                    "command" : "Identify",
                    "drawMode" : "FREEHAND_POLYGON",
                    "isSticky" : false,
                    "iconUri" : "Resources/Images/Icons/identify-freehand-24.png",
                    "statusText" : "@language-identify-freehand-polygon-tool"
                } ]
            }
        }, { 
            "moduleName" : "IWantToMenu",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuModule",
            "configuration" : { 
                "menus" : [ { 
                    "id" : "Iwantto",
                    "description" : "@language-iwtm-menus-description",
                    "moduleId" : "IWantToMenu",
                    "type" : "geocortex.essentialsHtmlViewer.Mapping.infrastructure.menus.MenuBase",
                    "defaultIconUri" : "Resources/Images/Icons/check-24.png",
                    "items" : [ { 
                        "iconUri" : "Resources/Images/Icons/search-24.png",
                        "text" : "@language-global-search",
                        "description" : "@language-global-search-desc",
                        "command" : "ActivateView",
                        "commandParameter" : "SearchView"
                    }, { 
                        "iconUri" : "Resources/Images/Icons/layerlist-24.png",
                        "text" : "@language-map-layers",
                        "description" : "@language-map-layers-desc",
                        "command" : "ShowLayerList"
                    }, { 
                        "iconUri" : "Resources/Images/Icons/identify-rectangle-24.png",
                        "text" : "@language-identify-rectangle",
                        "description" : "@language-identify-rectangle-desc",
                        "command" : "SetActiveTool",
                        "commandParameter" : "IdentifyRectangleTool"
                    }, { 
                        "iconUri" : "Resources/Images/Icons/identify-freehand-24.png",
                        "text" : "@language-identify-freehand",
                        "description" : "@language-identify-freehand-desc",
                        "command" : "SetActiveTool",
                        "commandParameter" : "IdentifyFreehandPolygonTool"
                    }, { 
                        "iconUri" : "Resources/Images/Icons/map-nav-initial-extent-24.png",
                        "text" : "@language-zoom-initial-extent",
                        "description" : "@language-zoom-initial-extent-desc",
                        "command" : "ZoomToInitialExtent",
                        "commandParameter" : 750
                    } ]
                } ]
            },
            "views" : [ { 
                "id" : "IWantToMenuView",
                "viewModelId" : "IWantToMenuViewModel",
                "visible" : false,
                "isManaged" : true,
                "iconUri" : "Resources/Images/Icons/arrow-down-white.png",
                "title" : "@language-iwtm-title",
                "description" : "@language-iwtm-description",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuView",
                "markup" : "Mapping/modules/IWantToMenu/IWantToMenuView.html",
                "region" : "ScreenRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "IWantToMenuViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.IWantToMenu.IWantToMenuViewModel",
                "configuration" : { }
            } ]
        }, { 
            "moduleName" : "Map",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.map.MapModule",
            "configuration" : { 
                "panDuration" : 0,
                "panRate" : 50,
                "zoomDuration" : 300,
                "zoomRate" : 50,
                "onClick" : "InvokeMapTip",
                "showLoadingStatus" : true,
                "loadingMessageTiming" : [ 1000, 3000, 3000 ],
                "tools" : [ { 
                    "name" : "CenterMapTool",
                    "command" : "PanToPoint",
                    "drawMode" : "POINT",
                    "isSticky" : true,
                    "statusText" : "@language-mbl-map-center"
                }, { 
                    "name" : "ZoomInTool",
                    "command" : "ZoomToExtent",
                    "drawMode" : "EXTENT",
                    "isSticky" : true,
                    "statusText" : "@language-map-zoom-in"
                }, { 
                    "name" : "ZoomOutTool",
                    "command" : "ZoomOutToExtent",
                    "drawMode" : "EXTENT",
                    "isSticky" : true,
                    "statusText" : "@language-map-zoom-out"
                } ]
            },
            "views" : [ { 
                "id" : "MapView",
                "viewModelId" : "MapViewModel",
                "visible" : true,
                "isManaged" : true,
                "title" : "@language-map-title",
                "iconUri" : "Resources/Images/Icons/map.png",
                "description" : "@language-map-surface",
                "markup" : "Mapping/modules/Map/MapView.html",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.map.MapView",
                "region" : "ScreenRegion",
                "configuration" : { 
                    "wrapAround180" : true,
                    "extentBroadcastLatency" : 20
                }
            } ],
            "viewModels" : [ { 
                "id" : "MapViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.map.MapViewModel",
                "configuration" : { 
                    "stepZoomFactor" : 0.5,
                    "panStep" : 0.333
                }
            } ]
        }, { 
            "moduleName" : "MapTips",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.maptips.MapTipsModule",
            "configuration" : { 
                "allowMultiple" : false,
                "contentField" : "description"
            }
        }, { 
            "moduleName" : "Menu",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.Menu.MenuModule",
            "configuration" : { 
                "menus" : [ { 
                    "id" : "FeatureActions",
                    "description" : "@language-feature-actions-description",
                    "moduleId" : "FeatureDetails",
                    "type" : "geocortex.essentialsHtmlViewer.Mapping.infrastructure.menus.MenuBase",
                    "defaultIconUri" : "Resources/Images/Icons/check-24.png",
                    "items" : [ { 
                        "text" : "@language-common-zoom",
                        "description" : "@language-common-zoom-description",
                        "iconUri" : "Resources/Images/Icons/arrow-right-alt-24.png",
                        "command" : "ZoomToFeature",
                        "commandParameter" : "",
                        "hideOnDisable" : "true"
                    }, { 
                        "text" : "@language-common-pan",
                        "description" : "@language-common-pan-description",
                        "iconUri" : "Resources/Images/Icons/pan-24.png",
                        "command" : "PanToFeature",
                        "commandParameter" : "",
                        "hideOnDisable" : "true"
                    } ]
                } ]
            }
        }, { 
            "moduleName" : "Prompt",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.prompt.PromptModule",
            "configuration" : { 
                "promptRegion" : "ModalWindowRegion"
            }
        }, { 
            "moduleName" : "Results",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.results.ResultsModule",
            "configuration" : { 
                "resultMappings" : { 
                    "Identify" : [ "ShowResultsList" ],
                    "MapTip" : [ "ShowMapTipResults" ],
                    "Workflow" : [ "ShowResultsList" ],
                    "Search" : [ "ShowResultsList" ]
                },
                "eventMappings" : { 
                    "ResultsListFeatureClickedEvent" : [ "ShowFeatureDetails" ],
                    "ResultsListFeaturePressedEvent" : [ "ShowFeatureDetails" ]
                }
            },
            "views" : [ { 
                "id" : "ResultsListView",
                "viewModelId" : "ResultsViewModel",
                "isManaged" : false,
                "visible" : false,
                "title" : "@language-common-results",
                "iconUri" : "Resources/Images/Icons/results.png",
                "description" : "@language-common-query-results",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.results.ResultsListView",
                "markup" : "Mapping/modules/Results/ResultsListView.html",
                "region" : "ResultsViewContainerRegion",
                "configuration" : { 
                    "isPaged" : true,
                    "pageSize" : 10
                }
            }, { 
                "id" : "ResultsFeatureActionsView",
                "viewModelId" : "ResultsViewModel",
                "isManaged" : false,
                "visible" : false,
                "title" : "@language-common-results",
                "description" : "@language-common-query-results",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.results.ResultsFeatureActionsView",
                "markup" : "Mapping/modules/Results/ResultsFeatureActionsView.html",
                "region" : "ResultsViewContainerRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "ResultsViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.results.ResultsViewModel",
                "configuration" : { }
            } ]
        }, { 
            "moduleName" : "Search",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchModule",
            "configuration" : { 
                "autoLoadSiteGeocoders" : true,
                "searchProviders" : [ { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.search.ArcGisGeocodeSearchProvider",
                    "name" : "@language-search-world-place-names",
                    "enable" : true,
                    "configuration" : { 
                        "url" : "http://tasks.arcgisonline.com/ArcGIS/rest/services/Locators/ESRI_Places_World/GeocodeServer",
                        "minimumScore" : 100,
                        "singleLineField" : "SingleLine"
                    }
                }, { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.search.ArcGisGeocodeSearchProvider",
                    "enable" : true,
                    "configuration" : { 
                        "url" : "http://tasks.arcgisonline.com/ArcGIS/rest/services/Locators/TA_Address_NA_10/GeocodeServer",
                        "minimumScore" : 70,
                        "singleLineField" : "SingleLine"
                    }
                }, { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.search.LayerSearchProvider",
                    "enable" : true,
                    "configuration" : { 
                        "exactMatch" : false
                    }
                }, { 
                    "type" : "geocortex.essentialsHtmlViewer.mapping.modules.search.BingGeocodeSearchProvider",
                    "enable" : true,
                    "configuration" : { 
                        "bingMapsKey" : "AhzUdXgTb9izUBjBFSuRA6nf7st57pSf36MC_a3A0UyWafIGGc_eOfMYuplrLiTR"
                    }
                } ]
            },
            "views" : [ { 
                "id" : "SearchView",
                "viewModelId" : "SearchViewModel",
                "visible" : false,
                "isManaged" : false,
                "title" : "@language-search-title",
                "iconUri" : "Resources/Images/Icons/search.png",
                "markup" : "Mapping/modules/Search/SearchView.html",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchView",
                "region" : "ResultsViewContainerRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "SearchViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.search.SearchViewModel",
                "configuration" : { }
            } ]
        }, { 
            "moduleName" : "Shell",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.shells.ShellModule",
            "configuration" : { },
            "views" : [ { 
                "id" : "ResultsViewContainerView",
                "viewModelId" : "ResultsViewContainerViewModel",
                "visible" : false,
                "isManaged" : true,
                "title" : "@language-common-results",
                "iconUri" : "Resources/Images/Icons/search.png",
                "type" : "geocortex.essentialsHtmlViewer.infrastructure.ui.ViewContainer.ViewContainerView",
                "markup" : "Mapping/infrastructure/ui/ViewContainer/ViewContainerView.html",
                "region" : "ScreenRegion",
                "configuration" : { }
            }, { 
                "id" : "LayerDataContainerView",
                "viewModelId" : "LayerDataContainerViewModel",
                "visible" : false,
                "isManaged" : true,
                "title" : "@language-common-layer-data",
                "iconUri" : "Resources/Images/Icons/layerlist.png",
                "type" : "geocortex.essentialsHtmlViewer.infrastructure.ui.ViewContainer.ViewContainerView",
                "markup" : "Mapping/infrastructure/ui/ViewContainer/ViewContainerView.html",
                "region" : "ScreenRegion",
                "configuration" : { }
            }, { 
                "id" : "ModalContainerView",
                "viewModelId" : "ModalContainerViewModel",
                "visible" : false,
                "isManaged" : false,
                "type" : "geocortex.essentialsHtmlViewer.infrastructure.ui.ViewContainer.ViewContainerView",
                "markup" : "Mapping/infrastructure/ui/ViewContainer/ViewContainerView.html",
                "region" : "ApplicationRegion",
                "configuration" : { }
            }, { 
                "id" : "ShellView",
                "viewModelId" : "ShellViewModel",
                "visible" : true,
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.shells.HandheldShellView",
                "markup" : "Mapping/modules/Shells/HandheldShellView.html",
                "region" : "ApplicationRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "ShellViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.shells.CommonShellViewModel",
                "configuration" : { }
            }, { 
                "id" : "ResultsViewContainerViewModel",
                "type" : "geocortex.essentialsHtmlViewer.infrastructure.ui.ViewContainer.ViewContainerViewModel",
                "configuration" : { 
                    "containerRegionName" : "ResultsViewContainerRegion",
                    "ordering" : { 
                        "SearchView" : 0,
                        "ResultsListView" : 1,
                        "ResultsFeatureActionsView" : 2,
                        "FeatureDetailsView" : 3
                    }
                }
            }, { 
                "id" : "LayerDataContainerViewModel",
                "type" : "geocortex.essentialsHtmlViewer.infrastructure.ui.ViewContainer.ViewContainerViewModel",
                "configuration" : { 
                    "containerRegionName" : "LayerDataContainerRegion",
                    "ordering" : { 
                        "SimpleLayerListView" : 0
                    }
                }
            }, { 
                "id" : "ModalContainerViewModel",
                "type" : "geocortex.essentialsHtmlViewer.infrastructure.ui.ViewContainer.ViewContainerViewModel",
                "configuration" : { 
                    "containerRegionName" : "ModalWindowRegion",
                    "backButtonOnRootView" : true,
                    "showBackButtonAsX" : true
                }
            } ]
        }, { 
            "moduleName" : "SimpleLayerList",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.simplelayerlist.SimpleLayerListModule",
            "configuration" : { },
            "views" : [ { 
                "id" : "SimpleLayerListView",
                "viewModelId" : "SimpleLayerListViewModel",
                "visible" : false,
                "markup" : "Mapping/modules/SimpleLayerList/SimpleLayerListView.html",
                "title" : "@language-map-layers",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.simplelayerlist.SimpleLayerListView",
                "region" : "LayerDataContainerRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "SimpleLayerListViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.simplelayerlist.SimpleLayerListViewModel",
                "configuration" : { 
                    "hideOperationalMapServices" : false,
                    "hideBaseMapServices" : false,
                    "hideOperationalMapServiceNames" : false,
                    "allowMultipleVisibleBaseMaps" : false
                }
            } ]
        }, { 
            "moduleName" : "Site",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.site.SiteModule",
            "configuration" : { 
                "siteUri" : "../../../../Demo_Zaventem"
            }
        }, { 
            "moduleName" : "Status",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusModule",
            "configuration" : { 
                "busyIcon" : "Resources/Images/loader-small.gif"
            },
            "views" : [ { 
                "id" : "StatusIndicatorView",
                "viewModelId" : null,
                "visible" : false,
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.status.StatusIndicatorView",
                "markup" : "Mapping/modules/Status/StatusIndicatorView.html",
                "region" : "BottomCenterMapRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ ]
        }, { 
            "moduleName" : "Tools",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.tools.ToolsModule",
            "configuration" : { 
                "showStatusMessages" : true,
                "tools" : [ ]
            }
        }, { 
            "moduleName" : "Toolbar",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarModule",
            "configuration" : { },
            "views" : [ { 
                "id" : "ToolbarView",
                "viewModelId" : "ToolbarViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarView",
                "markup" : "Mapping/modules/Toolbar/ToolbarView.html",
                "region" : "ToolRegion",
                "visible" : true,
                "configuration" : { }
            }, { 
                "id" : "ToolbarManagedViewsView",
                "viewModelId" : "ToolbarManagedViewsViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarManagedViewsView",
                "markup" : "Mapping/modules/Toolbar/ToolbarManagedViewsView.html",
                "region" : "ToolbarTabContentRegion",
                "visible" : true,
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "ToolbarViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarViewModel",
                "configuration" : { }
            }, { 
                "id" : "ToolbarManagedViewsViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.toolbar.ToolbarManagedViewsViewModel",
                "configuration" : { 
                    "ordering" : { 
                        "IWantToMenuView" : 0,
                        "MapView" : 1,
                        "SimpleLayerListView" : 2
                    }
                }
            } ]
        }, { 
            "moduleName" : "Workflow",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowModule",
            "configuration" : { 
                "showTitleInFormBody" : false,
                "defaultContainerRegionName" : "ModalWindowRegion",
                "defaultContainerTitle" : "@language-workflow-title",
                "defaultContainerIconUri" : "Resources/Images/Icons/Workflow.png",
                "showCaptureStatusMessages" : true,
                "startupWorkflows" : [ ],
                "formItems" : { 
                    "geocortex.forms.items.DatePickerFormItemView" : { 
                        "markup" : "Mapping/modules/Workflow/Forms/Items/DatePickerFormItemView.html",
                        "codebehind" : "geocortex.essentialsHtmlViewer.mapping.modules.workflow.forms.items.DatePickerFormItemView.js"
                    }
                },
                "containers" : [ { 
                    "name" : "Default",
                    "title" : "@language-workflow-title",
                    "regionName" : "ScreenRegion",
                    "isManaged" : true,
                    "displayHeader" : true,
                    "iconUri" : "Resources/Images/Icons/Workflow.png"
                }, { 
                    "name" : "Extract",
                    "title" : "@language-common-extract-data",
                    "regionName" : "ScreenRegion",
                    "isManaged" : true,
                    "displayHeader" : true,
                    "iconUri" : "Resources/Images/Icons/Workflow.png"
                }, { 
                    "name" : "ModalWindow",
                    "title" : "@language-workflow-title",
                    "regionName" : "ModalWindowRegion",
                    "isManaged" : false,
                    "iconUri" : "Resources/Images/Icons/Workflow.png"
                } ]
            },
            "views" : [ { 
                "id" : "WorkflowListView",
                "viewModelId" : "WorkflowViewModel",
                "title" : "@language-workflow-workflows",
                "description" : "@language-workflow-site-workflows",
                "iconUri" : "Resources/Images/view_workflows.jpg",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowListView",
                "markup" : "Mapping/modules/Workflow/WorkflowListView.html",
                "region" : "ScreenRegion",
                "visible" : false,
                "configuration" : { 
                    "hideOnClickWorkflow" : true
                }
            } ],
            "viewModels" : [ { 
                "id" : "WorkflowViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.workflow.WorkflowViewModel",
                "configuration" : { }
            } ]
        }, { 
            "moduleName" : "ZoomControl",
            "moduleType" : "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomControlModule",
            "configuration" : { },
            "views" : [ { 
                "id" : "GeolocateView",
                "viewModelId" : "GeolocateViewModel",
                "visible" : true,
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.GeolocateView",
                "markup" : "Mapping/modules/ZoomControl/GeolocateView.html",
                "region" : "NavigationMapRegion",
                "configuration" : { }
            }, { 
                "id" : "ZoomInView",
                "visible" : true,
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomInView",
                "markup" : "Mapping/modules/ZoomControl/ZoomInView.html",
                "region" : "NavigationMapRegion",
                "configuration" : { }
            }, { 
                "id" : "ZoomOutView",
                "visible" : true,
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.ZoomOutView",
                "markup" : "Mapping/modules/ZoomControl/ZoomOutView.html",
                "region" : "NavigationMapRegion",
                "configuration" : { }
            } ],
            "viewModels" : [ { 
                "id" : "GeolocateViewModel",
                "type" : "geocortex.essentialsHtmlViewer.mapping.modules.zoomcontrol.GeolocateViewModel",
                "configuration" : { }
            } ]
        } ]
    }
}