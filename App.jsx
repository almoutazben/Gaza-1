import React, { useState } from 'react';
import './App.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { 
  Heart, 
  Shield, 
  CreditCard, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  Globe,
  Smartphone,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

// Import images
import binanceSignup1 from './assets/search_images/m2cPkZaDKoYF.png';
import binanceSignup2 from './assets/search_images/PSw3DJj8j1ji.png';
import binanceSignup3 from './assets/search_images/FBAjlLMpGySm.png';
import binanceVerification from './assets/search_images/6LVjwLuLC8bU.jpeg';
import binanceIdUpload from './assets/search_images/NSTqPrZ1XIUL.jpg';
import binanceCardDeposit1 from './assets/search_images/EZMTFbOQ8wDZ.png';
import binanceCardDeposit2 from './assets/search_images/0vob1QSzIYgP.png';
import binanceCardDeposit3 from './assets/search_images/suP6kESbUFMM.png';
import binanceP2P1 from './assets/search_images/Jx5t5RW9tbY6.png';
import binanceP2P2 from './assets/search_images/nQY4QQOovJx3.png';
import binanceP2P3 from './assets/search_images/9CUaJDl7Irso.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [showWarning, setShowWarning] = useState(true);

  const sections = [
    { id: 'intro', title: 'مقدمة', icon: Heart },
    { id: 'account', title: 'فتح الحساب', icon: Shield },
    { id: 'deposit', title: 'إضافة الأموال', icon: CreditCard },
    { id: 'transfer', title: 'التحويل', icon: Users },
  ];

  const steps = [
    {
      title: "إنشاء حساب Binance",
      description: "التسجيل والتحقق من الهوية",
      icon: Shield,
      color: "bg-blue-500"
    },
    {
      title: "إضافة الأموال",
      description: "عبر Visa/Mastercard أو P2P",
      icon: CreditCard,
      color: "bg-green-500"
    },
    {
      title: "التحويل للمستلم",
      description: "إلى مكتب صرافة في غزة",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "استلام الأموال",
      description: "نقداً من مكتب الصرافة",
      icon: CheckCircle,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">دليل تحويل الأموال إلى غزة</h1>
                <p className="text-sm text-gray-600">عبر منصة Binance</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Globe className="w-4 h-4 ml-1" />
              دعم مباشر
            </Badge>
          </div>
        </div>
      </header>

      {/* Warning Banner */}
      {showWarning && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-4 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 ml-2" />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-yellow-800">تنبيه مهم</h3>
              <p className="text-sm text-yellow-700 mt-1">
                تأكد من التواصل مع مكتب صرافة موثوق في غزة قبل إجراء أي تحويل. هذا الدليل للأغراض التعليمية فقط.
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowWarning(false)}
              className="text-yellow-600 hover:text-yellow-800"
            >
              <EyeOff className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">المحتويات</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveSection(section.id)}
                    >
                      <Icon className="w-4 h-4 ml-2" />
                      {section.title}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Process Overview */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">خطوات العملية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{step.title}</h4>
                          <p className="text-xs text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeSection === 'intro' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-6 h-6 text-red-500" />
                      مقدمة
                    </CardTitle>
                    <CardDescription>
                      دليل شامل لتحويل الأموال إلى أهل غزة بأمان وسهولة
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      في ظل الظروف الراهنة، يواجه أهلنا في غزة تحديات جمة، ومن أهمها صعوبة وصول المساعدات المالية إليهم. 
                      يهدف هذا الدليل إلى توفير حل عملي ومباشر للأفراد الراغبين في دعم أهل غزة ماليًا من منازلهم، 
                      دون الحاجة لوسطاء تقليديين.
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                      <h3 className="font-semibold text-blue-900 mb-2">لماذا Binance؟</h3>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          منصة عالمية موثوقة وآمنة
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          دعم للدينار الليبي في تداول P2P
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          تحويلات داخلية مجانية وفورية
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          طرق دفع متعددة (Visa, Mastercard, P2P)
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-green-200 bg-green-50">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-5 h-5 text-green-600" />
                            <h4 className="font-semibold text-green-900">الأمان</h4>
                          </div>
                          <p className="text-sm text-green-800">
                            تحويلات مشفرة وآمنة مع حماية متقدمة للحسابات
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Smartphone className="w-5 h-5 text-blue-600" />
                            <h4 className="font-semibold text-blue-900">السهولة</h4>
                          </div>
                          <p className="text-sm text-blue-800">
                            واجهة بسيطة ومتاحة على الهاتف والكمبيوتر
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'account' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-6 h-6 text-blue-500" />
                      كيفية فتح حساب Binance
                    </CardTitle>
                    <CardDescription>
                      خطوات التسجيل والتحقق من الهوية
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Registration Steps */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">1. التسجيل</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">زيارة الموقع الرسمي</h4>
                            <p className="text-gray-600 mb-3">
                              اذهب إلى <a href="https://www.binance.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.binance.com</a> أو حمل التطبيق من متجر التطبيقات
                            </p>
                            <img src={binanceSignup1} alt="شاشة التسجيل في Binance" className="rounded-lg border max-w-md" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">إدخال المعلومات الأساسية</h4>
                            <p className="text-gray-600 mb-3">
                              أدخل بريدك الإلكتروني أو رقم هاتفك وأنشئ كلمة مرور قوية
                            </p>
                            <img src={binanceSignup2} alt="إدخال معلومات التسجيل" className="rounded-lg border max-w-md" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              3
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">التحقق الأولي</h4>
                            <p className="text-gray-600 mb-3">
                              أدخل رمز التحقق المرسل إلى بريدك الإلكتروني أو هاتفك
                            </p>
                            <img src={binanceSignup3} alt="التحقق من البريد الإلكتروني" className="rounded-lg border max-w-md" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* KYC Verification */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">2. التحقق من الهوية (KYC)</h3>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-400 mb-4">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-yellow-800">مطلوب للجميع</h4>
                            <p className="text-sm text-yellow-700">
                              التحقق من الهوية ضروري لزيادة حدود الإيداع والسحب وضمان الامتثال للوائح المالية
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">الوصول إلى صفحة التحقق</h4>
                            <p className="text-gray-600 mb-3">
                              انتقل إلى قسم "التحقق من الهوية" في إعدادات حسابك
                            </p>
                            <img src={binanceVerification} alt="صفحة التحقق من الهوية" className="rounded-lg border max-w-md" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">تحميل وثائق الهوية</h4>
                            <p className="text-gray-600 mb-3">
                              ارفع صور واضحة لجواز السفر أو بطاقة الهوية الوطنية أو رخصة القيادة
                            </p>
                            <img src={binanceIdUpload} alt="تحميل وثائق الهوية" className="rounded-lg border max-w-md" />
                            
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                              <h5 className="font-medium text-blue-900 mb-2">متطلبات الصور:</h5>
                              <ul className="text-sm text-blue-800 space-y-1">
                                <li>• صور واضحة وغير مشوشة</li>
                                <li>• جميع النصوص مقروءة</li>
                                <li>• الوثيقة كاملة وظاهرة في الإطار</li>
                                <li>• صادرة عن جهة حكومية</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'deposit' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-green-500" />
                      كيفية إضافة الأموال إلى حساب Binance
                    </CardTitle>
                    <CardDescription>
                      طرق متعددة للإيداع حسب موقعك وتفضيلاتك
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Credit Card Method */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-500" />
                        1. الإيداع عبر بطاقات Visa أو Mastercard
                      </h3>
                      
                      <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-400 mb-4">
                        <h4 className="font-medium text-green-800 mb-2">الطريقة الأسرع والأسهل</h4>
                        <p className="text-sm text-green-700">
                          شراء مباشر للعملات الرقمية (مثل USDT) باستخدام بطاقتك الائتمانية أو الخصم المباشر
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">الانتقال إلى قسم شراء العملات الرقمية</h4>
                            <p className="text-gray-600 mb-3">
                              ابحث عن خيار "شراء العملات الرقمية" (Buy Crypto) في القائمة الرئيسية
                            </p>
                            <img src={binanceCardDeposit1} alt="خيار شراء العملات الرقمية" className="rounded-lg border max-w-md" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">اختيار طريقة الدفع</h4>
                            <p className="text-gray-600 mb-3">
                              اختر "بطاقة ائتمان/خصم" (Credit/Debit Card) كطريقة للدفع
                            </p>
                            <img src={binanceCardDeposit2} alt="اختيار بطاقة الائتمان" className="rounded-lg border max-w-md" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              3
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">تحديد العملة والمبلغ</h4>
                            <p className="text-gray-600 mb-3">
                              أدخل المبلغ بالعملة المحلية واختر USDT كعملة رقمية (موصى بها للتحويل)
                            </p>
                            <img src={binanceCardDeposit3} alt="تحديد المبلغ والعملة" className="rounded-lg border max-w-md" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* P2P Method */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-500" />
                        2. الإيداع عبر وسيط P2P في ليبيا
                      </h3>
                      
                      <div className="bg-purple-50 p-4 rounded-lg border-r-4 border-purple-400 mb-4">
                        <h4 className="font-medium text-purple-800 mb-2">مناسب للمناطق ذات الخيارات المصرفية المحدودة</h4>
                        <p className="text-sm text-purple-700">
                          Binance تدعم الدينار الليبي (LYD) في تداول P2P، مما يتيح الشراء من وسطاء محليين
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">الانتقال إلى قسم P2P</h4>
                            <p className="text-gray-600 mb-3">
                              من الصفحة الرئيسية، انتقل إلى قسم "تداول P2P" (P2P Trading)
                            </p>
                            <img src={binanceP2P1} alt="قسم تداول P2P" className="rounded-lg border max-w-md" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">اختيار الشراء والعملة</h4>
                            <p className="text-gray-600 mb-3">
                              اختر "شراء" (Buy) وحدد USDT والدينار الليبي (LYD)
                            </p>
                            <img src={binanceP2P2} alt="اختيار الشراء والعملة في P2P" className="rounded-lg border max-w-md" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              3
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">البحث عن بائع مناسب</h4>
                            <p className="text-gray-600 mb-3">
                              اختر بائعاً موثوقاً بناءً على التقييمات وطريقة الدفع المفضلة
                            </p>
                            <img src={binanceP2P3} alt="قائمة البائعين في P2P" className="rounded-lg border max-w-md" />
                            
                            <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                              <h5 className="font-medium text-yellow-800 mb-2">نصائح للأمان:</h5>
                              <ul className="text-sm text-yellow-700 space-y-1">
                                <li>• اختر بائعين بتقييم عالي (95%+)</li>
                                <li>• تأكد من طريقة الدفع المناسبة لك</li>
                                <li>• اقرأ شروط البائع بعناية</li>
                                <li>• لا تحرر الأموال إلا بعد استلام الدفع</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'transfer' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-orange-500" />
                      كيفية تحويل الأموال إلى مكتب صرافة في غزة
                    </CardTitle>
                    <CardDescription>
                      خطوات التحويل الآمن والاستلام النقدي
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Important Warning */}
                    <div className="bg-red-50 p-4 rounded-lg border-r-4 border-red-400">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-red-800">تنبيه مهم جداً</h4>
                          <p className="text-sm text-red-700 mt-1">
                            يجب التواصل المسبق مع مكتب الصرافة في غزة قبل إجراء أي تحويل لتأكيد استلامهم وتزويدهم بالاسم الثلاثي للمستلم
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Pre-contact Steps */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">1. التواصل المسبق مع مكتب الصرافة</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">البحث عن مكتب صرافة موثوق</h4>
                            <p className="text-gray-600 mb-3">
                              ابحث عن مكاتب صرافة في غزة تدعم استلام العملات الرقمية عبر Binance
                            </p>
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <h5 className="font-medium text-blue-900 mb-2">معايير الاختيار:</h5>
                              <ul className="text-sm text-blue-800 space-y-1">
                                <li>• سمعة طيبة وتقييمات إيجابية</li>
                                <li>• دعم العملات الرقمية (USDT)</li>
                                <li>• حساب نشط على Binance</li>
                                <li>• رسوم صرف معقولة</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">الحصول على معلومات الحساب</h4>
                            <p className="text-gray-600 mb-3">
                              اطلب من المكتب تزويدك بمعرف Binance الخاص بهم (BUID) أو البريد الإلكتروني المرتبط بحسابهم
                            </p>
                            <div className="p-3 bg-green-50 rounded-lg">
                              <h5 className="font-medium text-green-900 mb-2">معلومات مطلوبة:</h5>
                              <ul className="text-sm text-green-800 space-y-1">
                                <li>• معرف Binance (BUID) أو البريد الإلكتروني</li>
                                <li>• تأكيد دعم استلام USDT</li>
                                <li>• رسوم الصرف إلى العملة المحلية</li>
                                <li>• ساعات العمل ومتطلبات الاستلام</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              3
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">تزويد الاسم الثلاثي للمستلم</h4>
                            <p className="text-gray-600 mb-3">
                              أخبر المكتب بالاسم الثلاثي الكامل للشخص الذي سيستلم الأموال (يجب أن يطابق وثيقة الهوية)
                            </p>
                            <div className="p-3 bg-yellow-50 rounded-lg">
                              <h5 className="font-medium text-yellow-800 mb-2">مهم:</h5>
                              <p className="text-sm text-yellow-700">
                                الاسم يجب أن يطابق تماماً الاسم في الهوية الشخصية أو جواز السفر للمستلم
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Transfer Steps */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">2. إجراء التحويل</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">الانتقال إلى قسم السحب/التحويل</h4>
                            <p className="text-gray-600 mb-3">
                              في حسابك على Binance، اذهب إلى "المحفظة" ثم "سحب" أو "تحويل"
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">اختيار التحويل الداخلي</h4>
                            <p className="text-gray-600 mb-3">
                              اختر "تحويل داخلي" أو "Binance Pay" للتحويل بين حسابات Binance (مجاني وفوري)
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              3
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">إدخال تفاصيل المستلم والمبلغ</h4>
                            <p className="text-gray-600 mb-3">
                              أدخل معرف Binance الخاص بمكتب الصرافة والمبلغ المطلوب تحويله
                            </p>
                            <div className="p-3 bg-red-50 rounded-lg">
                              <h5 className="font-medium text-red-800 mb-2">تحقق مرتين:</h5>
                              <p className="text-sm text-red-700">
                                تأكد من صحة معرف المستلم والمبلغ قبل التأكيد - التحويلات لا يمكن إلغاؤها
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Receiving Steps */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">3. استلام الأموال في غزة</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">إخطار مكتب الصرافة</h4>
                            <p className="text-gray-600">
                              أخبر المكتب بأن التحويل تم وذكر المبلغ والاسم الثلاثي للمستلم
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">ذهاب المستلم إلى المكتب</h4>
                            <p className="text-gray-600">
                              يذهب المستلم إلى مكتب الصرافة مع وثيقة هوية تطابق الاسم المزود
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              3
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">استلام الأموال النقدية</h4>
                            <p className="text-gray-600">
                              بعد التحقق من الهوية، يقوم المكتب بتسليم الأموال النقدية للمستلم
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Success Message */}
                    <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-green-900 text-lg">تم إنجاز التحويل بنجاح!</h4>
                          <p className="text-green-800 mt-1">
                            لقد ساهمت في دعم أهل غزة بطريقة مباشرة وآمنة. شكراً لك على دعمك ومساندتك.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold">دعم أهل غزة</h3>
            </div>
            <p className="text-gray-400 mb-4">
              هذا الدليل مقدم للأغراض التعليمية فقط. تأكد من التحقق من موثوقية مكاتب الصرافة قبل التعامل معها.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>تم إنشاؤه بواسطة Manus AI</span>
              <span>•</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

